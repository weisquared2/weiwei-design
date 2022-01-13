---
layout: default
permalink: /projects
title: Projects

---

# Projects

{% for project in site.projects %}
{% if project.display == true %}
<div class="project-card">
    <span class="project-thumbnail">
        <img src="{{project.image-path}}" alt="{{project.image-alt}}" class="project-thumbnail"/>
    </span>
    <span class="project-details">
        <h2 class="project-tagline"> {{ project.project-tagline }} </h2>
        <h3 class="project-title"> {{ project.project-title }} </h3>
        {{project.content}}
    </span>
</div>
{% if project.islast != true %}
<hr>
{% endif %}
{% endif %}
{% endfor %}
