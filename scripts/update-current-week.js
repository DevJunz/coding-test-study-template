// README.md의 "이번 주 문제" 섹션을 오늘 날짜 기준으로 자동 계산해 갱신합니다.
// .github/workflows/update-current-week.yml 에서 매주 월요일에 실행됩니다.
// 의존성 없이 동작하도록 순수 fs + Date만 사용합니다.

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..");

// W01 시작(목) / 마감(금). W02부터는 정상 월~금 주기.
const STUDY_START = Date.UTC(2026, 6, 23); // 2026-07-23 (목)
const W01_DEADLINE = Date.UTC(2026, 6, 24); // 2026-07-24 (금)
const W02_START = Date.UTC(2026, 6, 27); // 2026-07-27 (월)
const DAY_MS = 24 * 60 * 60 * 1000;

function todayUTC() {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
}

function fmt(ms) {
  return new Date(ms).toISOString().slice(0, 10);
}

function computeCurrentWeek(today) {
  if (today <= W01_DEADLINE) {
    return { num: 1, deadline: W01_DEADLINE };
  }
  const diffDays = Math.floor((today - W02_START) / DAY_MS);
  const weekOffset = Math.max(Math.floor(diffDays / 7), 0);
  const num = 2 + weekOffset;
  const weekStart = W02_START + weekOffset * 7 * DAY_MS;
  const deadline = weekStart + 4 * DAY_MS; // 금요일
  return { num, deadline };
}

function parseProblemBank(content, label) {
  const rows = [];
  for (const line of content.split("\n")) {
    if (!line.trim().startsWith("|")) continue;
    const cols = line.split("|").map((c) => c.trim());
    // | 번호 | 제목 | 난이도 | 배정 주차 | 비고 | 링크 |
    if (cols[4] === label && cols[1] && !/^:?-+:?$/.test(cols[1])) {
      rows.push({ num: cols[1], title: cols[2], level: cols[3], link: cols[6] });
    }
  }
  return rows;
}

function buildBlock(label, weekDirNum, deadline, problemRows) {
  const weekDir = `studies/week-${weekDirNum}`;
  const weekReadme = path.join(REPO_ROOT, weekDir, "README.md");
  const weekFolderExists = fs.existsSync(weekReadme);

  if (problemRows.length === 0) {
    return (
      `이번 주(${label}) 문제가 아직 \`docs/PROBLEM_BANK.md\`에 배정되지 않았습니다.\n` +
      `[\`docs/PROBLEM_BANK.md\`](docs/PROBLEM_BANK.md)에서 문제를 배정하고 ` +
      `[\`templates/WEEK_TEMPLATE.md\`](templates/WEEK_TEMPLATE.md)로 주차 폴더를 만들어주세요.`
    );
  }

  const weekLink = weekFolderExists
    ? `[\`${weekDir}/README.md\`](${weekDir}/README.md)`
    : `${weekDir}/README.md (준비 중 — templates/WEEK_TEMPLATE.md로 생성 필요)`;

  const header = "| 번호 | 문제 | 난이도 | 링크 |\n|:---:|:---|:---:|:---|";
  const body = problemRows
    .map((p) => `| ${p.num} | ${p.title} | ${p.level} | ${p.link} |`)
    .join("\n");

  return `**${label}** (${weekLink}) · 마감 ${fmt(deadline)}(금) 23:59\n\n${header}\n${body}`;
}

function main() {
  const today = todayUTC();
  const { num, deadline } = computeCurrentWeek(today);
  const weekDirNum = String(num).padStart(2, "0");
  const label = `W${weekDirNum}`;

  const bankPath = path.join(REPO_ROOT, "docs", "PROBLEM_BANK.md");
  const bankContent = fs.readFileSync(bankPath, "utf8");
  const problemRows = parseProblemBank(bankContent, label);

  const block = buildBlock(label, weekDirNum, deadline, problemRows);

  const readmePath = path.join(REPO_ROOT, "README.md");
  const readme = fs.readFileSync(readmePath, "utf8");
  const startMarker = "<!-- CURRENT-WEEK:START (자동 생성 - 직접 수정하지 마세요. .github/workflows/update-current-week.yml 이 매주 월요일 자동 갱신합니다) -->";
  const endMarker = "<!-- CURRENT-WEEK:END -->";
  const startIdx = readme.indexOf(startMarker);
  const endIdx = readme.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error("README.md에서 CURRENT-WEEK 마커를 찾을 수 없습니다.");
  }

  const newReadme =
    readme.slice(0, startIdx + startMarker.length) +
    "\n" +
    block +
    "\n" +
    readme.slice(endIdx);

  if (newReadme === readme) {
    console.log(`변경 없음 (현재 주차: ${label})`);
    return;
  }

  fs.writeFileSync(readmePath, newReadme);
  console.log(`README.md 갱신 완료 (현재 주차: ${label})`);
}

main();
