# 뜬구름 잡는 이야기

클라우드 인프라 엔지니어의 실무 관측 일지. GitHub Pages로 바로 배포할 수 있는 정적 사이트입니다.

## 폴더 구조

```
site/
├── index.html          # 홈 (히어로 + 관측 기록 목록 + 소개)
├── css/style.css        # 전체 스타일
├── js/main.js            # 최소한의 인터랙션
├── posts/                # 개별 글 (예시 3개 포함)
│   ├── backup-policy-mismatch.html
│   ├── hypervisor-forensics.html
│   └── mcp-server-first-agent.html
└── README.md
```

## GitHub Pages로 배포하는 법

가장 간단한 방법은 **개인 계정 사이트**로 배포하는 것입니다. 이렇게 하면
`https://pang-ec.github.io` 라는 루트 주소를 그대로 쓸 수 있습니다.

1. GitHub에서 `pang-ec.github.io` 라는 이름으로 **새 public 리포지토리**를 만듭니다.
   (이름이 정확히 이 형식이어야 GitHub Pages가 자동으로 루트 도메인에 붙습니다.)
2. 이 `site` 폴더 안의 내용물(폴더 자체 말고 **안의 파일들**)을 그 리포지토리 루트에 올립니다.
3. 터미널에서:

   ```bash
   cd site
   git init
   git remote add origin https://github.com/pang-ec/pang-ec.github.io.git
   git add .
   git commit -m "첫 배포: 뜬구름 잡는 이야기"
   git branch -M main
   git push -u origin main
   ```

4. 리포지토리 **Settings → Pages**에서 Source를 `main` 브랜치 / `/ (root)`로 지정합니다.
   (개인 계정 `*.github.io` 리포지토리는 보통 자동으로 활성화됩니다.)
5. 1~2분 뒤 `https://pang-ec.github.io` 에서 확인할 수 있습니다.

> 이미 사용 중인 GitHub CLI 인증 방식(환경변수 `GH_TOKEN` + `gh auth setup-git`)을
> 그대로 쓰셔도 됩니다. `git push`는 `gh` 인증을 자동으로 물려받지 않으니
> `gh auth setup-git`을 먼저 실행해두는 걸 잊지 마세요.

## 새 글 추가하는 법

1. `posts/` 폴더 안 기존 파일 하나를 복사해서 새 파일명으로 저장합니다.
   (예: `posts/2026-09-01-ncp-mcp-server.html`)
2. `<title>`, `.post-title`, `.post-meta-bar`, 본문(`<article class="post-body wrap">`)을
   새 글 내용으로 바꿉니다.
3. `구름량`(복잡도 %)과 `체감`(난이도) 값은 아래 기준을 참고해 정하면 됩니다.

   | 구름량 | 체감 라벨 | 의미 |
   |---|---|---|
   | 0–30% | 맑음 | 짧고 명확한 팁/설정 공유 |
   | 30–60% | 구름 조금 | 일반적인 트러블슈팅/구현기 |
   | 60–80% | 흐림 | 여러 시스템이 얽힌 아키텍처 분석 |
   | 80%+ | 폭우 | 원인 불명 상태에서 시작한 깊은 조사 |

4. `index.html`의 `.log-list` 안에 새 `<article class="log-card">` 블록을 하나 추가해서
   목록에 노출시킵니다. (기존 카드 하나를 복사해서 링크·제목·요약·구름량만 바꾸면 됩니다.)

## 다음에 고려하면 좋은 것

- **애드센스/제휴 링크**: 방문자가 어느 정도 쌓인 뒤 글 하단에 자연스럽게 추가.
- **RSS 피드**: 정적으로 `feed.xml`을 직접 관리하거나, 빌드 스크립트로 자동 생성.
- **커스텀 도메인**: `pang-ec.github.io` 리포지토리에 `CNAME` 파일을 추가하면 연결 가능.
