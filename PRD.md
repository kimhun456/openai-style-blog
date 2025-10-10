# PRD: OpenAI 스타일 개인 블로그 구축

## 1. 프로젝트 핵심 요구사항 (Core Requirements)

OpenAI 홈페이지의 깔끔하고 미니멀한 디자인 철학에서 영감을 받아, 콘텐츠에만 집중할 수 있는 개인 기술 블로그를 구축합니다.

### 디자인 요구사항
*   **색상:** 검은색, 흰색, 회색 등 무채색 계열을 주 색상으로 사용하고, 중요한 요소(링크, 활성화된 메뉴 등)에만 컬러 포인트를 적용합니다.
*   **여백:** 컴포넌트와 텍스트 사이에 충분한 여백을 두어 시각적 편안함과 콘텐츠 가독성을 극대화합니다.
*   **폰트:** OpenAI Sans와 유사한 현대적이고 가독성 높은 산세리프 폰트를 메인으로 사용합니다.
*   **레이아웃:** 복잡한 사이드바나 위젯 없이, 게시글 목록과 본문 중심의 단순하고 직관적인 1단 레이아웃을 유지합니다.
*   **애니메이션:** 스크롤에 따른 부드러운 페이드인 효과 등, 사용자 경험을 해치지 않는 미묘하고 정적인 애니메이션을 적용합니다.

### 기능 요구사항
*   **반응형 디자인:** 모바일, 태블릿, 데스크톱 등 모든 디바이스에서 최적의 레이아웃을 제공합니다.
*   **마크다운 기반 콘텐츠:** `/_posts` 폴더 내 마크다운(.md) 파일로 게시글을 작성하고 관리합니다.
*   **핵심 라우팅:** 게시글 목록(메인) 페이지와 개별 게시글 상세 페이지 간의 라우팅을 구현합니다.
*   **웹 성능 최적화:** Lighthouse 점수 90점 이상을 목표로 하여 빠른 사용자 경험을 제공합니다.

---

## 2. 상세 명세 (Detailed Specifications)

### 2.1. 페이지별 기능

#### 메인 페이지 (Homepage)
*   **Header:** 블로그 제목, 메뉴 (Home, Tags)
*   **Post List:** 게시글 목록을 최신순으로 나열합니다. 각 항목은 `제목`, `작성일`, `태그`, `요약`으로 구성됩니다.
*   **Footer:** 저작권 정보, SNS 링크(GitHub 등)를 포함합니다.

#### 게시글 상세 페이지 (Post Detail Page)
*   **Post Header:** `제목`, `작성일`, `태그`를 표시합니다.
*   **Post Body:**
    *   표준 마크다운 문법(헤더, 목록, 인용 등)을 모두 지원합니다.
    *   다양한 프로그래밍 언어에 대한 구문 강조(Syntax Highlighting)를 지원합니다.
    *   마크다운 내 이미지를 반응형으로 처리합니다.
*   **TOC (Table of Contents):** 본문 헤더(h2, h3)를 기반으로 한 목차를 페이지 우측에 고정하여 제공합니다.

#### 태그 시스템 (Tag System)
*   **Tags Page (`/tags`):** 블로그에 사용된 모든 태그를 모아서 보여줍니다.
*   **Tag Detail Page (`/tags/[tag]`):** 특정 태그에 해당하는 모든 게시글 목록을 보여줍니다.

### 2.2. 콘텐츠 관리 (Content Management)
*   모든 게시글은 `/_posts` 폴더에 마크다운(.md) 파일로 관리됩니다.
*   각 파일 상단의 `frontmatter`를 사용하여 메타데이터(`title`, `date`, `tags`, `summary`)를 정의합니다.
    ```yaml
    ---
    title: 'Gemini CLI를 활용한 블로그 개발기'
    date: '2025-10-08'
    tags: ['AI', 'Development', 'Gemini']
    summary: 'PRD 문서를 기반으로 Gemini CLI를 사용하여 블로그의 초기 구조를 잡아보는 과정을 기록합니다.'
    ---
    ```

### 2.3. 비기능 요구사항 (Non-Functional Requirements)
*   **SEO (검색 엔진 최적화):**
    *   각 페이지에 동적 `title`, `meta description` 태그를 생성합니다.
    *   소셜 공유를 위한 Open Graph 태그를 지원합니다.
    *   `sitemap.xml`과 `robots.txt`를 자동으로 생성합니다.
*   **접근성 (Accessibility):**
    *   시맨틱 HTML 태그를 사용합니다.
    *   모든 이미지에 `alt` 속성을 제공합니다.
    *   키보드 네비게이션을 지원합니다.

## 3. 기술 스택 (Tech Stack)
*   **프레임워크:** Next.js (SSG)
*   **스타일링:** Tailwind CSS
*   **마크다운 처리:** `remark`, `rehype` 라이브러리 생태계 (`rehype-slug`, `rehype-autolink-headings` 포함)
*   **코드 하이라이팅:** `rehype-highlight`
*   **배포:** Vercel

## 4. 개발 로드맵 (Development Roadmap)
- [x] **프로젝트 초기 설정**: Next.js + TypeScript + Tailwind CSS
- [x] **기본 레이아웃 구현**: Header, Footer, Main Layout
- [x] **마크다운 파싱 로직 구현**: `gray-matter`, `remark`
- [x] **메인 페이지 구현**: 포스트 목록 렌더링
- [x] **게시글 상세 페이지 구현**: 동적 라우팅 및 마크다운 렌더링
- [x] **태그 시스템 구현**: 태그별 목록 페이지
- [x] **SEO 최적화**: `meta` 태그, `sitemap.xml` 생성
- [x] **UI/UX 개선**: TOC(목차) 컴포넌트 구현
- [x] **배포**: Vercel 연동