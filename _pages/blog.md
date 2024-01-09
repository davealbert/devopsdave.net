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
      <div>
        {% if post.post_image %}
        <div class="post-image">
          <img src="{{ post.post_image}}" onClick="document.location='{{ post.url }}'">
        </div>
        {% endif %}
      </div>
      <p>
        {{ post.description }}
      </p>
    </li>
  {% endfor %}
</ul>