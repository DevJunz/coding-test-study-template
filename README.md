# 🧩 알고리즘 코딩테스트 스터디

> 3개월, 매주 권장 2문제 + 수준별 선택 5문제(하루 1문제)로 코딩테스트 근육 만들기 💪

<p>
  <img alt="기간" src="https://img.shields.io/badge/기간-12주(3개월)-4C6EF5">
  <img alt="목표" src="https://img.shields.io/badge/주간목표-권장 2 + 선택 5-40C057">
  <img alt="투자시간" src="https://img.shields.io/badge/권장-하루 1~2시간-FAB005">
  <img alt="보증금" src="https://img.shields.io/badge/보증금-30,000원-FA5252">
</p>

---

## 📌 이 스터디는

- **집중 학습**: 매주 하나의 알고리즘 주제를 정하고, 모두가 **권장 2문제(쉬운 코어)**를 함께 풉니다.
- **매일 꾸준히**: 여기에 **선택 5문제(본인 레벨로 자유 선택)**를 더해 **주 7문제 ≈ 하루 1문제** 페이스를 만듭니다.
- **깊이 있는 풀이**: 모든 문제는 아래 **5요소**를 반드시 작성합니다.
  1. 접근 방법  2. 시간 복잡도  3. 공간 복잡도  4. 핵심 풀이 방법  5. 실제 코드
- **책임감 있는 참여**: 보증금 3만원 + 미달 시 벌금으로 꾸준함을 지킵니다.

---

## 🗂️ 저장소 구조

```
.
├── README.md                 # 지금 이 문서 (대문)
├── docs/
│   ├── RULES.md              # 📜 스터디 규칙 (보증금·벌금·하차)
│   ├── CURRICULUM.md         # 🗓️ 12주 커리큘럼
│   └── GUIDE.md              # 🧭 저장소 사용법 (폴더/파일 규칙, 커밋·PR)
├── members/
│   ├── README.md             # 👥 멤버 목록
│   └── _TEMPLATE.md          # 자기소개 템플릿
├── templates/
│   └── SOLUTION_TEMPLATE.md  # ✍️ 문제 풀이 템플릿 (5요소)
├── studies/
│   ├── README.md             # 📊 주차별 진행 현황 체크표
│   └── week-01 ~ week-12/    # 주차별 풀이 폴더
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
└── .gitmessage               # 커밋 템플릿
```

---

## 🚀 시작하기 (처음 오셨다면)

1. **자기소개 작성** — [`members/_TEMPLATE.md`](members/_TEMPLATE.md)를 복사해 `members/<깃허브ID>.md`로 만들고 [`members/README.md`](members/README.md) 목록에 한 줄 추가
2. **커밋 템플릿 등록** — 저장소 루트에서 아래 한 줄 실행
   ```bash
   git config commit.template .gitmessage
   ```
3. **규칙 정독** — [`docs/RULES.md`](docs/RULES.md)와 [`docs/GUIDE.md`](docs/GUIDE.md) 읽기
4. **첫 문제 풀기** — [`templates/SOLUTION_TEMPLATE.md`](templates/SOLUTION_TEMPLATE.md)로 이번 주 권장 2 + 선택 5문제 작성 → PR

> 자세한 절차는 [`docs/GUIDE.md`](docs/GUIDE.md) 참고.

---

## 🗓️ 커리큘럼 한눈에 보기

| 주차 | 주제 | 주차 | 주제 |
|:---:|:---|:---:|:---|
| 1주 | 구현 · 시뮬레이션 | 7주 | BFS |
| 2주 | 스택 · 큐 | 8주 | DFS |
| 3주 | 정렬 | 9주 | 그리디 |
| 4주 | 이분 탐색 | 10주 | DP 기초 |
| 5주 | 완전탐색 · 브루트포스 | 11주 | DP 심화 |
| 6주 | 재귀 · 백트래킹 | 12주 | 최단경로 · 그래프 |

전체 문제 목록은 👉 [`docs/CURRICULUM.md`](docs/CURRICULUM.md)

---

## 👥 멤버

멤버 목록과 자기소개는 👉 [`members/README.md`](members/README.md)

## 📊 진행 현황

주차별 제출 체크표는 👉 [`studies/README.md`](studies/README.md)

---

## 📜 핵심 규칙 요약

- 💰 **보증금**: 시작 시 **30,000원** 예치
- ❌ **벌금(하이브리드)**: 권장 2문제 미달 시 **6,000/3,000원** + 선택 3개 미만이면 **+2,000원** (주 최대 8,000원)
- 🚪 **하차**: 도중 하차 시 보증금 **반환 없음**
- ✅ **인증**: 매주 일요일 자정까지 PR 머지 완료
- 🌐 **문제 플랫폼**: 권장은 공통 문제, **선택은 프로그래머스·백준·SWEA·LeetCode 등 자유**

> 전체 규칙 👉 [`docs/RULES.md`](docs/RULES.md)
