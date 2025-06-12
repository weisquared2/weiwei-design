---
layout: wide
permalink: /projects
title: Projects
---

# Projects

<div class="project-summaries">
        {% for project in site.projects %}
        <div class="project-summary">
          <div class="project-summary-visual">
            <img class="project-thumbnail" src= "{{ project.thumbnail-path }}" alt= "{{ project.thumbnail-alt }}">
          </div>

          <div class="project-summary-text">
              <h2 class="project-title"> {{ project.project-title }} </h2>
              <p class="project-company-meta"><a href= "{{ project.company-link }}" class="project-company-link">{{ project.company-name }}</a> &#x2734; {{ project.company-industry }} &#x2734; {{ project.company-type }} </p>
              <p class="project-application-type">{{ project.application-type }}</p>
              <p class="project-my-impact">My impact: {{ project.my-impact }}</p>
              <!-- <a href="{{ project.slug }}"><button>See project &#x2192;</button></a> -->
              <button disabled>Full project coming soon</button>
          </div>
        </div>
        {% endfor %}
</div>
