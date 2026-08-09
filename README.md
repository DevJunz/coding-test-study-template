# 🧩 SWEA 코딩테스트 스터디

> 매주 배정된 SWEA 문제를 풀고 PR로 제출 → 금요일엔 로테이션으로 배정된 리뷰어가 리뷰

<p>
  <img alt="플랫폼" src="https://img.shields.io/badge/플랫폼-SWEA-4C6EF5">
  <img alt="주간목표" src="https://img.shields.io/badge/주간목표-4문제-40C057">
  <img alt="인원" src="https://img.shields.io/badge/인원-5명-FAB005">
</p>

---

## 📌 이 스터디는

- **문제 플랫폼은 SWEA로 통일**합니다. 배정 문제 목록은 [`docs/PROBLEM_BANK.md`](docs/PROBLEM_BANK.md)에서 관리합니다.
- **주 4문제**를 목표로 풉니다. 문제 수는 스터디장이 언제든 늘리거나 줄일 수 있습니다.
- **월 · 화 · 수 · 목 — 풀이 & PR 제출**, **금 — 리뷰**로 한 주가 돌아갑니다.
- **리뷰어는 PR을 올리면 자동으로, 매주 로테이션되어 배정**됩니다. (GitHub Actions)
- 모든 풀이는 아래 **5요소**를 반드시 작성합니다.
  1. 접근 방법  2. 시간 복잡도  3. 공간 복잡도  4. 핵심 풀이 방법  5. 실제 코드

---

## 🗓️ 주간 워크플로우

| 요일 | 할 일 |
|:---:|:---|
| 월 · 화 · 수 · 목 | 이번 주 배정 문제 풀이 → 개인 브랜치에 작성 → PR 생성 |
| (PR 생성 시) | GitHub Actions가 **자동으로 리뷰어 1명을 배정** (매주 로테이션) |
| 금 | 배정받은 PR에 리뷰 남기기 (코멘트 · approve/change request) |

> PR은 문제 하나당 하나씩 올려도 되고, 그 주 문제를 모아 PR 1개로 올려도 됩니다. 팀 편한 방식으로 통일하세요.
> **가능하면 문제를 푼 날(월~목)에 맞춰 그날그날 PR을 올려주세요.** 리뷰어 입장에서 미리 나눠서 볼 수 있어 편합니다. 다만 놓친 날이 있다면 나중에 몰아서 한 번에 올려도 괜찮습니다.

### 🔁 리뷰어 자동 로테이션

- `.github/workflows/auto-assign-reviewer.yml`이 PR이 열릴 때마다 동작합니다.
- 멤버 순서를 고정해두고, **ISO 주차(week number)** 를 오프셋으로 사용해 매주 리뷰어 짝이 바뀝니다.
- 같은 사람이 같은 사람만 계속 리뷰하지 않도록 자동으로 순환하며, 자기 자신은 절대 배정되지 않습니다.
- 멤버가 추가/변경되면 워크플로우 파일의 `members` 배열만 수정하면 됩니다.

---

## 🗂️ 저장소 구조

```
.
├── README.md                       # 지금 이 문서 (대문)
├── docs/
│   ├── PROBLEM_BANK.md             # 🏦 SWEA 문제 저장소 (추가/삭제/배정 관리)
│   └── GUIDE.md                    # 🧭 저장소 사용법 (폴더/파일 규칙, 커밋·PR)
├── members/
│   ├── README.md                   # 👥 멤버 목록
│   └── _TEMPLATE.md                # 자기소개 템플릿
├── templates/
│   ├── SOLUTION_TEMPLATE.md        # ✍️ 문제 풀이 템플릿 (5요소)
│   ├── WEEK_TEMPLATE.md            # 🗓️ 새 주차 폴더 생성용 템플릿
│   └── EXAMPLE_SOLUTION.md         # 📎 작성 형식 예시
├── studies/
│   ├── README.md                   # 📊 주차별 진행 현황 체크표
│   └── week-01/                    # 주차별 풀이 폴더 (필요할 때마다 추가)
├── scripts/
│   └── update-current-week.js      # 📅 "이번 주 문제" 계산 스크립트
├── .github/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       ├── auto-assign-reviewer.yml  # 🔁 리뷰어 자동 로테이션
│       └── update-current-week.yml   # 📅 이번 주 문제 자동 갱신 (매주 월요일)
└── .gitmessage                     # 커밋 템플릿
```

---

## 🚀 시작하기 (처음 오셨다면)

1. **자기소개 확인/수정** — [`members/README.md`](members/README.md)에서 본인 파일을 찾아 [`members/_TEMPLATE.md`](members/_TEMPLATE.md) 형식으로 채워넣기
2. **커밋 템플릿 등록** — 저장소 루트에서 아래 한 줄 실행
   ```bash
   git config commit.template .gitmessage
   ```
3. **사용법 정독** — [`docs/GUIDE.md`](docs/GUIDE.md) 읽기
4. **이번 주 문제 확인** — 아래 [📅 이번 주 문제](#-이번-주-문제) 섹션 (자동 갱신됨)
5. **첫 문제 풀기** — [`templates/SOLUTION_TEMPLATE.md`](templates/SOLUTION_TEMPLATE.md)로 작성 → PR

---

## 👥 멤버

| 이름 | 깃허브 |
|:---:|:---:|
| 최준환 | [@DevJunz](https://github.com/DevJunz) |
| 이예서 | [@yeseoLee](https://github.com/yeseoLee) |
| 민수영 | [@Suyoung-Min](https://github.com/Suyoung-Min) |
| 김태형 | [@clarityth](https://github.com/clarityth) |
| 현민구 | [@min9u](https://github.com/min9u) |

멤버별 소개는 👉 [`members/README.md`](members/README.md)

## 📊 진행 현황

주차별 제출 체크표는 👉 [`studies/README.md`](studies/README.md)

## 🏦 문제 저장소

전체 SWEA 문제 풀 · 주차 배정 현황은 👉 [`docs/PROBLEM_BANK.md`](docs/PROBLEM_BANK.md)

---

## 📅 이번 주 문제

<!-- CURRENT-WEEK:START (자동 생성 - 직접 수정하지 마세요. .github/workflows/update-current-week.yml 이 매주 월요일 자동 갱신합니다) -->
**W03** ([`studies/week-03/README.md`](studies/week-03/README.md)) · 마감 2026-08-07(금) 23:59

| 번호 | 문제 | 난이도 | 링크 |
|:---:|:---|:---:|:---|
| 5653 | 줄기세포배양 | - | https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWXRJ8EKe48DFAUo |
| 5650 | 핀볼 게임 | - | https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWXRF8s6ezEDFAUo |
| 5648 | 원자 소멸 시뮬레이션 | - | https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWXRFInKex8DFAUo |
| 5644 | 무선 충전 | - | https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWXRDL1aeugDFAUo |
<!-- CURRENT-WEEK:END -->

> 이 섹션은 매주 월요일 00:00(KST)에 GitHub Actions가 [`docs/PROBLEM_BANK.md`](docs/PROBLEM_BANK.md) 기준으로 자동 갱신합니다. 필요하면 Actions 탭에서 `update-current-week` 워크플로우를 수동 실행해도 됩니다.

## 🗓️ 전체 주차 계획 (W01~W08)

`docs/PROBLEM_BANK.md`에 있는 27문제를 W01(1문제) → W02~W07(4문제씩) → W08(2문제)에 모두 배정해뒀습니다.
W08 이후 더 진행하려면 [`docs/PROBLEM_BANK.md`](docs/PROBLEM_BANK.md)에 문제를 추가하고 [`templates/WEEK_TEMPLATE.md`](templates/WEEK_TEMPLATE.md)로 다음 주차를 만드세요.

전체 진행 현황표는 👉 [`studies/README.md`](studies/README.md)
