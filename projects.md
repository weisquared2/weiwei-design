---
layout: default
permalink: /projects
title: Projects

---

# Projects

{% for project in site.projects reversed %}
<div class="project-card">
    <img src="{{project.image-path}}" alt="{{project.image-alt}}" class="project-thumbnail"/>
    <h2> {{ project.project-tagline }} </h2>
    <h3> {{ project.project-title }} </h3>
</div>
{% endfor %}