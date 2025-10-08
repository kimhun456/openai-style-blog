PRD: OpenAI 스타일 개인 블로그 구축

1. 개요 (Overview)
   프로젝트명: Code & Thought (가제)

비전: OpenAI 웹사이트의 미니멀하고 현대적인 디자인 철학에서 영감을 받아, 콘텐츠에만 집중할 수 있는 개인 기술 블로그를 구축한다. 복잡한 기능보다는 가독성, 심미성, 개발 경험에 중점을 둔다.

개발 목표: 이 PRD를 기반으로 Gemini CLI, GitHub Copilot, Codex 등 AI 기반 개발 도구를 적극적으로 활용하여 프로젝트를 완성한다.

2. 목표 (Goals)
   콘텐츠 중심의 UI/UX 구축: 사용자가 글을 읽고 쓰는 경험에 온전히 집중할 수 있도록 방해 요소를 최소화한다.

심미적 만족감 제공: OpenAI와 유사한 다크 모드 기반의 세련된 디자인을 구현하여 블로그 방문 및 운영 자체의 만족도를 높인다.

손쉬운 콘텐츠 관리: 복잡한 CMS(콘텐츠 관리 시스템) 없이, 마크다운(.md) 파일 기반으로 쉽게 글을 작성하고 관리할 수 있는 환경을 구축한다.

빠른 성능: 정적 사이트 생성(SSG) 방식을 채택하여 매우 빠른 로딩 속도와 높은 성능을 보장한다.

3. 주요 디자인 및 UX 원칙 (Key Design & UX Principles)
   Minimalism: 불필요한 사이드바, 위젯, 광고 등은 모두 제거한다.

Dark Mode First: 기본 테마는 다크 모드이며, 라이트 모드 전환 기능은 V1에서는 제외하거나 선택적으로 추가한다.

Typography: 가독성이 뛰어난 산세리프 계열 폰트(예: Inter, Pretendard)를 메인으로 사용하고, 코드 블록에는 모노스페이스 폰트(예: Fira Code, D2Coding)를 적용한다.

Generous Spacing: 컴포넌트와 텍스트 사이에 충분한 여백을 두어 시각적 편안함을 제공한다.

Subtle Interactivity: 버튼 호버(hover) 시 미묘한 색상 변화나 부드러운 애니메이션 효과를 추가하여 정적인 느낌을 줄인다.

Responsive Design: 모바일, 태블릿, 데스크톱 등 모든 디바이스에서 최적의 레이아웃을 제공한다.

4. 핵심 기능 요구사항 (Functional Requirements)
   4.1. 메인 페이지 (Homepage)
   Header: 블로그 제목, 간단한 메뉴 (예: Home, Tags)

Post List: 게시글 목록이 최신순으로 나열된다.

각 항목은 글 제목, 작성일, 태그(Tags), **간단한 요약(Summary)**으로 구성된다.

Footer: 간단한 저작권 정보, SNS 링크(GitHub 등)

4.2. 게시글 상세 페이지 (Post Detail Page)
Post Header: 글 제목, 작성일, 태그

Post Body:

마크다운 렌더링: 모든 표준 마크다운 문법(헤더, 목록, 인용, 링크 등)을 지원해야 한다.

코드 블록 하이라이팅: 다양한 프로그래밍 언어에 대한 구문 강조(Syntax Highlighting) 기능이 필수적이다.

이미지 처리: 마크다운 내 이미지를 자연스럽게 표시한다.

TOC (Table of Contents): (선택 사항) 긴 글의 경우, 본문 헤더(h2, h3)를 기반으로 한 목차를 자동으로 생성하여 우측이나 좌측에 고정한다.

4.3. 콘텐츠 관리 (Content Management)
모든 게시글은 프로젝트 내 특정 폴더(예: /\_posts)에 마크다운(.md 또는 .mdx) 파일로 관리된다.

각 마크다운 파일 상단에는 frontmatter를 사용하여 메타데이터(title, date, tags, summary)를 정의한다.

YAML

---

title: 'Gemini CLI를 활용한 블로그 개발기'
date: '2025-10-08'
tags: ['AI', 'Development', 'Gemini']
summary: 'PRD 문서를 기반으로 Gemini CLI를 사용하여 블로그의 초기 구조를 잡아보는 과정을 기록합니다.'

---

여기에 본문 내용 작성...
4.4. 태그 시스템 (Tag System)
Tags Page: 블로그에 사용된 모든 태그를 모아서 보여주는 페이지.

Tag Detail Page: 특정 태그를 클릭했을 때, 해당 태그가 포함된 모든 게시글 목록을 보여주는 페이지.

5. 비기능적 요구사항 (Non-Functional Requirements)
   성능 (Performance): Google PageSpeed Insights 기준, 모바일과 데스크톱 모두 90점 이상을 목표로 한다.

SEO (Search Engine Optimization):

각 페이지에 적절한 title, meta description 태그가 동적으로 생성되어야 한다.

소셜 공유를 위한 Open Graph 태그를 지원해야 한다.

sitemap.xml과 robots.txt를 자동으로 생성해야 한다.

접근성 (Accessibility): 시맨틱 HTML 태그 사용, 이미지 alt 속성 제공 등 웹 접근성 표준을 준수한다.

6. 기술 스택 제안 (Proposed Tech Stack)
   프레임워크: Next.js 또는 Astro (SSG에 강점을 가짐)

스타일링: Tailwind CSS (빠른 프로토타이핑 및 일관된 디자인 시스템 구축에 용이)

마크다운 처리: remark, rehype 라이브러리 생태계 활용

코드 하이라이팅: shiki 또는 prism-react-renderer

배포: Vercel 또는 Netlify (Git 연동을 통한 자동 배포)

7. 1단계 개발 로드맵 (Phase 1 Development Roadmap)
   프로젝트 초기 설정: Next.js + TypeScript + Tailwind CSS 프로젝트 생성

레이아웃 구현: 메인 레이아웃(Header, Footer 포함) 컴포넌트 작성

마크다운 파싱 로직 구현: 로컬 마크다운 파일을 읽어와 HTML로 변환하는 유틸리티 함수 작성

메인 페이지 구현: 파싱된 게시글 데이터를 받아와 포스트 목록 렌더링

게시글 상세 페이지 구현: 동적 라우팅 [slug].js를 사용하여 개별 포스트 렌더링 및 코드 하이라이팅 적용

기본 스타일링: OpenAI 스타일을 참고하여 전체적인 디자인 시스템(컬러, 폰트, 간격) 적용

1차 배포: Vercel에 프로젝트를 연결하여 자동 배포 설정
