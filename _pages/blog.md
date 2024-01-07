---
layout: page
title: Blog
permalink: /blog/
hero_image: /images/hero-blog.jpg
---

<ul class="blog-list-items">
  {% for post in site.posts %}
    <li class="blog-list-items">
      <a href="{{ post.url }}">{{ post.title }}</a> ~ <span class="post-date">{{ post.date | date_to_string }}</span>
      <p>
        {{ post.description }}
      </p>
    </li>
  {% endfor %}
</ul>