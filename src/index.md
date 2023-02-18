---
title: Danny Bédard
layout: "base.njk"
---

<section id="main">
    <div class="wrapper">
        <h2>Bienvenue</h2>
        <p>Quoi de neuf?</p>
{% for post in collections.posts %}
        <div class="music">
            <h3>{{ post.data.title }}</h3>
            <p>{{ post.data.description }}</p>
            <p>{{ post.data.when }}</p>
            <p>{{ post.data.where }}</p>
            <p>{{ post.data.image }}</p>
            <img src="C:\Users\Danny\Desktop\devWeb\src\index.md">
        </div>
{% endfor %}
    </div>
</section>
