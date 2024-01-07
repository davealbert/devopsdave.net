---
layout: page
title: Blog
permalink: /blog/
---

<ul class="blog-list-items">
  {% for post in site.posts %}
    <li class="blog-list-items">
      <a href="{{ post.url }}">{{ post.title }}</a> ~ {{ post.date | date_to_string }}
      <p>
        {{ post.description }}
      </p>
    </li>
  {% endfor %}
</ul>