# 조은찬 — Portfolio

클라우드 인프라 엔지니어 조은찬의 포트폴리오. GitHub Pages로 배포하는 정적 사이트입니다.

## 폴더 구조

```
site/
├── index.html          # 홈 (프로젝트 + 기술 스택 + 글 목록 + 소개)
├── css/style.css        # 전체 스타일
├── js/main.js            # 최소한의 인터랙션
├── posts/                # 개별 글 (예시 3개 포함)
│   ├── backup-policy-mismatch.html
│   ├── hypervisor-forensics.html
│   └── mcp-server-first-agent.html
└── README.md
```

## GitHub Pages로 배포하는 법

리포지토리 이름이 `pang-ec.github.io`이므로 `main` 브랜치에 push하면
GitHub Pages가 자동으로 `https://pang-ec.github.io`에 반영합니다.

```bash
git add .
git commit -m "업데이트 내용"
git push
```

## 새 프로젝트 추가하는 법

`index.html`의 `.project-list` 안에 `<article class="project">` 블록을 하나
복사해서 제목·설명·기술 스택을 바꿔주세요.

## 새 글 추가하는 법

1. `posts/` 폴더 안 기존 파일 하나를 복사해서 새 파일명으로 저장합니다.
2. `<title>`, `.post-title`, `.post-meta-bar`, 본문(`<article class="post-body wrap">`)을
   새 글 내용으로 바꿉니다.
3. `index.html`의 `.post-list` 안에 `<a class="post-row">` 한 줄을 추가해서
   목록에 노출시킵니다.

## 다음에 고려하면 좋은 것

- 프로젝트마다 **정량적 성과**(개선율, 절감 비용, 처리 건수 등) 추가
- 핵심 프로젝트 1~2개에 **아키텍처 다이어그램** 추가
- 애드센스/제휴 링크는 방문자가 어느 정도 쌓인 뒤 고려
- 커스텀 도메인: 리포지토리에 `CNAME` 파일을 추가하면 연결 가능
