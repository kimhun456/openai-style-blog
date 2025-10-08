# 블로그 개발 태스크 목록

## 1단계: 프로젝트 설정 및 핵심 기능

- [ ] **프로젝트 초기화**
  - [ ] Next.js, TypeScript, Tailwind CSS 프로젝트 생성 (`npx create-next-app@latest --typescript --tailwind`)
- [ ] **기본 레이아웃 구현**
  - [ ] `components` 폴더 생성
  - [ ] Header 컴포넌트 작성 (블로그 제목, 메뉴)
  - [ ] Footer 컴포넌트 작성 (저작권, SNS 링크)
  - [ ] 전체 페이지에 적용될 메인 Layout 컴포넌트 작성
- [ ] **마크다운 파싱 로직 구현**
  - [ ] `/_posts` 폴더 생성 및 예제 마크다운 파일 추가
  - [ ] `gray-matter` 라이브러리 설치 (frontmatter 파싱용)
  - [ ] `remark`, `remark-html` 라이브러리 설치 (마크다운 to HTML 변환용)
  - [ ] `lib` 또는 `utils` 폴더에 마크다운 파일을 읽고 파싱하는 함수 작성
- [ ] **메인 페이지 구현 (Post List)**
  - [ ] `getStaticProps`를 사용하여 `/_posts`의 모든 마크다운 파일 정보(메타데이터)를 읽어오기
  - [ ] 읽어온 데이터를 props로 받아와 메인 페이지에 게시글 목록 렌더링
  - [ ] 각 목록 아이템 스타일링 (제목, 작성일, 태그, 요약)
- [ ] **게시글 상세 페이지 구현 (Post Detail)**
  - [ ] 동적 라우팅을 위한 `pages/posts/[slug].tsx` 파일 생성
  - [ ] `getStaticPaths`를 사용하여 모든 게시글의 경로(`slug`)를 생성
  - [ ] `getStaticProps`를 사용하여 특정 `slug`에 해당하는 마크다운 본문까지 파싱
  - [ ] 파싱된 HTML을 본문에 렌더링 (`dangerouslySetInnerHTML` 사용)
  - [ ] 코드 블록 하이라이팅 라이브러리(예: `shiki` 또는 `prism-react-renderer`) 적용
- [ ] **기본 스타일링 적용**
  - [ ] `tailwind.config.js`에 OpenAI 스타일 기반의 커스텀 컬러, 폰트, 간격 정의
  - [ ] `globals.css`에 다크 모드 기본 배경색 및 폰트 스타일 적용
  - [ ] 가독성을 고려한 타이포그래피 및 전반적인 레이아웃 스타일링

## 2단계: 고급 기능 및 SEO

- [ ] **태그 시스템 구현**
  - [ ] 모든 게시글의 태그를 수집하여 중복을 제거하는 로직 작성
  - [ ] `pages/tags.tsx` 페이지 생성 및 모든 태그 목록 표시
  - [ ] `pages/tags/[tag].tsx` 동적 라우트 페이지 생성
  - [ ] 특정 태그에 해당하는 게시글 목록 필터링 및 표시
- [ ] **SEO 최적화**
  - [ ] `next/head`를 사용하여 각 페이지(메인, 상세, 태그)에 동적으로 `title`, `meta description` 추가
  - [ ] Open Graph 태그 (`og:title`, `og:description`, `og:image` 등) 추가
  - [ ] `next-sitemap` 라이브러리를 사용하여 `sitemap.xml` 및 `robots.txt` 자동 생성 설정
- [ ] **UI/UX 개선**
  - [ ] 버튼, 링크 등에 미묘한 호버 애니메이션 및 트랜지션 효과 추가
  - [ ] 모바일, 태블릿, 데스크톱 해상도에 맞는 반응형 디자인 최종 점검
  - [ ] (선택) Table of Contents(목차) 컴포넌트 구현
- [ ] **배포**
  - [ ] GitHub Repository 생성 및 프로젝트 푸시
  - [ ] Vercel에 프로젝트 연결 및 자동 배포 설정 확인
