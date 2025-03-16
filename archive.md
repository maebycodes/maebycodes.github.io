---
layout: page
title: Archive
permalink: /archive/
---

<div class="archive">
  {% for post in site.posts %}
    {% assign currentdate = post.date | date: "%Y" %}
    {% if currentdate != date %}
      {% unless forloop.first %}</ul>{% endunless %}
      <h2 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h2>
      <ul class="posts">
      {% assign date = currentdate %}
    {% endif %}
      <li>
        <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div> 