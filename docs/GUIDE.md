# 🧭 저장소 사용법

## 📁 폴더 / 파일 규칙

```
studies/week-XX/<깃허브ID>/<문제번호>-<문제이름>.md
```

- `week-XX`: 2자리 숫자 (`week-01`, `week-02`, …)
- `<깃허브ID>`: 본인 GitHub 아이디 그대로 사용
- 파일명 예시: `studies/week-01/DevJunz/1767-프로세서연결하기.md`

새 주차가 필요하면 [`templates/WEEK_TEMPLATE.md`](../templates/WEEK_TEMPLATE.md)를 복사해 `studies/week-XX/README.md`로 저장하고, [`docs/PROBLEM_BANK.md`](PROBLEM_BANK.md)에서 문제 4개를 골라 배정하세요.

## ✍️ 풀이 작성 규칙

- [`templates/SOLUTION_TEMPLATE.md`](../templates/SOLUTION_TEMPLATE.md)를 복사해서 작성합니다.
- 5요소(접근 방법 / 시간 복잡도 / 공간 복잡도 / 핵심 풀이 방법 / 실제 코드)는 필수입니다.
- 작성 형식이 헷갈리면 [`templates/EXAMPLE_SOLUTION.md`](../templates/EXAMPLE_SOLUTION.md) 참고.

## 🔀 커밋 & PR

1. 저장소 루트에서 커밋 템플릿 등록: `git config commit.template .gitmessage`
2. 브랜치 예시: `week01/DevJunz`
3. PR 생성 — 제목은 `[W01] DevJunz - SWEA 4문제` 형태
   - **가능하면 문제를 푼 날(월~목)에 맞춰 그날그날 PR을 올려주세요.** 하루에 하나씩 쌓이면 리뷰어가 미리 나눠서 볼 수 있어 편합니다.
   - 다만 놓친 날이 있어도 괜찮습니다 — 나중에 몰아서 한 번에 제출해도 됩니다.
4. PR을 열면 GitHub Actions가 **자동으로 리뷰어 1명을 배정**합니다 (아래 설명 참고).
5. 금요일까지 배정받은 PR에 리뷰를 남깁니다.

## 🔁 리뷰어 자동 로테이션 동작 방식

`.github/workflows/auto-assign-reviewer.yml`이 `pull_request: opened` 이벤트에 반응합니다.

1. 워크플로우에 하드코딩된 멤버 배열(`DevJunz`, `yeseoLee`, `Suyoung-Min`, `clarityth`, `min9u`)에서 PR 작성자의 위치를 찾습니다.
2. 현재 날짜의 **ISO 주차 번호**를 오프셋으로 사용해 `(작성자 위치 + 1 + 주차 번호) % 멤버 수` 로 리뷰어를 계산합니다.
3. 계산된 리뷰어를 GitHub PR 리뷰어로 자동 요청합니다.
4. 주차가 바뀌면 오프셋이 바뀌므로 **매주 리뷰어 짝이 자동으로 순환**합니다. 자기 자신은 절대 배정되지 않도록 안전장치가 들어있습니다.

멤버가 추가/탈퇴하면 워크플로우 파일의 `members` 배열만 수정하면 됩니다. 별도의 상태 파일이나 수동 개입이 필요 없습니다.

## 📊 진행 현황 갱신

매주 리뷰가 끝나면 [`studies/README.md`](../studies/README.md)의 체크표를 갱신합니다.
