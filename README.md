# Musign 사이트 클론코딩

HTML, CSS, JavaScript를 사용해 **Musign 메인 페이지**를 클론코딩한 웹 퍼블리싱 포트폴리오 프로젝트입니다.

> **본 프로젝트는 개인 학습 및 포트폴리오 용도로 제작되었습니다.**

---

## 프로젝트 소개

Musign 사이트의 메인 페이지를 분석하여 HTML, CSS, JavaScript로 직접 구현한 클론코딩 프로젝트입니다.

메인 비주얼, 섹션별 이미지 배치, SVG 원형 애니메이션, 메뉴 오픈 인터랙션, 스크롤 애니메이션 등을 구현하며 웹 퍼블리싱 역량을 높이는 것을 목표로 작업했습니다.

- **프로젝트명** : Musign 사이트 클론코딩
- **작업 유형** : Web Publishing
- **제작 목적** : 퍼블리싱 실습 및 취업 포트폴리오

---

## 원본 사이트

https://www.musign.net/

---

## 사용 기술

| 구분   | 기술             |
| ------ | ---------------- |
| Markup | HTML5            |
| Style  | CSS3             |
| Script | JavaScript (ES6) |
| Font   | Custom Font      |

---

## 주요 기능

### 1. Header 및 메뉴

- 로고와 GNB 메뉴 구성
- 우측 고정 메뉴 오픈 버튼 구현
- 메뉴 오버레이 열기 / 닫기 인터랙션 구현
- `classList`를 활용한 클래스 제어

---

### 2. Main Visual

- 메인 비주얼 이미지와 타이틀 텍스트 배치
- 이미지와 텍스트가 함께 보이는 섹션 구조 구현
- 반응형 화면에서도 레이아웃이 유지되도록 CSS 구성

---

### 3. Scroll Animation

- 스크롤 위치에 따라 요소에 애니메이션 클래스 추가
- 기존 jQuery 및 scrolla 플러그인을 제거하고 순수 JavaScript로 변경
- `getBoundingClientRect()`를 활용해 요소의 화면 진입 여부 계산
- 텍스트, 이미지, SVG 요소의 등장 애니메이션 구현

---

### 4. SVG Animation

- SVG path를 활용한 원형 라인 애니메이션 구현
- `getTotalLength()`를 사용해 path 길이 계산
- CSS keyframes와 연동되는 SVG 모션 구성

---

### 5. Footer

- 회사 정보, 주소, 연락처, SNS 목록 배치
- 사이트 전체 톤에 맞춘 하단 영역 구성

---

## 프로젝트 구조

```text
musign/
├── index.html
├── css/
│   ├── font.css
│   └── style.css
├── js/
│   └── script.js
├── img/
├── font/
│   └── handel gothic.ttf
└── README.md
```

---

## 라이브 실행

1. 웹사이트 주소

https://minodm92.github.io/CloneCoding/musign/

---

## 구현 내용

- HTML5 시맨틱 마크업 적용
- CSS를 사용한 전체 레이아웃 및 반응형 스타일 구현
- 이미지, 텍스트, SVG를 활용한 섹션별 비주얼 구성
- 메뉴 오픈 / 닫기 인터랙션 구현
- 스크롤 위치에 따른 애니메이션 구현
- jQuery 코드를 순수 JavaScript로 변환
- 기능별 JavaScript 함수를 분리하고 즉시 실행 함수 안에서 실행

---

## 작업 과정에서 중점적으로 구현한 부분

- 원본 사이트의 레이아웃 흐름을 분석해 HTML 구조 설계
- CSS animation과 keyframes를 활용한 모션 구현
- 스크롤 이벤트를 활용한 요소 등장 효과 구현
- jQuery 의존성을 제거하고 JavaScript ES6 문법으로 변경
- `const 함수명 = () => {}` 형식으로 기능별 함수 구성
- 즉시 실행 함수로 초기 실행 로직 정리

---

## 배운 점

이번 프로젝트를 통해 이미지 중심의 브랜드 사이트를 HTML, CSS, JavaScript로 구현하는 과정을 경험했습니다.

특히 jQuery 플러그인에 의존하던 스크롤 애니메이션을 순수 JavaScript로 바꾸면서 DOM 선택, 이벤트 처리, 클래스 제어, 위치 계산 방식에 대해 더 명확히 이해할 수 있었습니다. 또한 SVG path와 CSS animation을 함께 사용하는 방식도 익힐 수 있었습니다.

---

## 개선 예정 사항

- 반응형 레이아웃 세부 보완
- 접근성 향상을 위한 대체 텍스트 및 포커스 처리 개선
- 다양한 브라우저 환경에서 호환성 테스트
- 코드 리팩토링 및 중복 스타일 정리
- 애니메이션 성능 최적화

---

## 프로젝트 미리보기

> 프로젝트 실행 화면

```text
메인 화면 이미지 또는 GIF를 추가할 수 있습니다.
```

예시

```md
![메인화면](./img/preview.png)
```

---

## 라이선스 및 저작권

본 프로젝트는 **개인 학습 및 포트폴리오** 목적으로 제작한 클론코딩 프로젝트입니다.

프로젝트에 사용된 디자인, 이미지 및 콘텐츠의 저작권은 **Musign 및 원저작자**에게 있으며, 상업적 목적으로 사용하지 않습니다.

---

## Reference

- Original Website : https://www.musign.net/
- HTML5
- CSS3
- JavaScript (ES6)
