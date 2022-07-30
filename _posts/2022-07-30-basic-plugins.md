---
layout: single
title:  "페이지 레이아웃을 위한 플러그인"
categories: IT
tags: knowledge
---

<br/>

이번 글은 페이지 레이아웃을 맞추기 위해 기본적으로 사용했던 플러그인 목록이다.<br/>
다음 프로젝트에선 다른 플러그인들을 활용할지는 미지수지만, 일단 기록해본다.

<br/><br/>

## CSS
- normalize.css : 브라우저간의 차이를 잡아주기 위한 플러그인.
- reset.css : 브라우저 초기화 css. 코드양이 많아지므로 이전엔 사용했지만 현재는 normalize.css 로 갈아탐.

<br/><br/>

## JS
- respond.js : IE8 이하 버전에서 media query 지원 가능하게 해줌.
- html5Shiv.js : 새로운 HTML5 요소들이 IE6~9, Safari4.x (iphone 3.x), Firefox 3.x 에서 작동하게 해줌.
- IE9.js : IE 구버전에서 새로운 HTML5 태그를 인식 및 지원 가능하게 해줌. (선택자, max-height, min-height, png 파일 투명도 오류, 더블마진버그 등)<br/>업데이트 현황 : IE7.js > IE8.js > IE9.js (최신버전)

<br/><br/>

## JSON
- manifast.json : 웹앱매니패스트. 웹을 앱처럼 만들어줌. 홈화면 추가시 이름, 아이콘 등을 설정함.