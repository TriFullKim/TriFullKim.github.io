---
title: Astro를 이용해 blog 만들기
author: TriFullKim
pubDatetime: 2023-07-06T11:40:00+09:00
postSlug: make blog with astro
featured: false
draft: true
tags:
  - node framework
  - astro
  - blog
ogImage: ""
description: 투두리스트를 쓴 것임.
---

![AstroBG](https://assets.website-files.com/63e3d6905bacd6855fa38c1c/63e3d6905bacd670cda391e7_Astro%20Framework%20Thumb-min.jpg)
출처 : adservio / [astro-framework](https://www.adservio.fr/post/astro-framework)

# Why Astro?

글쓴이가 Astro를 이용해 사이트를 구성한 가장 큰 이유는 markdown을 이용해 블로그를 작성하고 싶었다.
당장에 이 포스트도 markdown으로 작성한 것을 Astro가 자동으로 웹페이지로 만들어 준 것이다. 그 외에도 가장 큰 이유는 눈에 띄었다.

## 어떻게 Astro를 이용해 페이지를 만들 수 있나?

참고로 글쓴이는 React와 같은 node.js 라이브러리를 사용해 본적이 없다. 따라서 정확한 설명/표현을 할 수 없음을 미리 말한다.
그럼에도 Astro를 이용한 것은 처음 블로그를 만들 때 Ruby기반의 Jekyll보다 좋은 확장성을 가진 라이브러리를 사용하면 후일에 좋을 것 같아 사용하였다.

[Astro Docs tutorials](https://docs.astro.build/en/tutorial/0-introduction/)를 보면 'Astro를 이용해 블로그를 만들기', 'markdown으로 포스트 올리기', '변수를 이용해 이름 정해주기'와 같은
