---
title: Danny Bédard Musique
layout: "base.njk"
css: music
---

<section id="main">
    <div class="wrapper">
        <h2>Musique</h2>
        <p>Dans cette section vous trouverez plusieurs vidéos et audios de quelques-uns des projets auquel Danny a participé.</p>
{% for m in collections.music %}
        <div class="music">
            <h3>{{ m.data.title }} - {{ m.data.project }}</h3>
            <p>{{ m.data.description }}</p>
            <video controls src="../src/res/music/CetteVoix.mp4"></video>
        </div>
{% endfor %}
    </div>
</section>