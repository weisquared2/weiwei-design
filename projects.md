---
layout: wide
permalink: /projects
title: Projects
---

# Projects

<div class="project-summaries">
        {% for project in site.projects %}
          {% if project.display == true %}
          <div class="project-summary">
            <div class="project-summary-visual">
              <img class="project-thumbnail" src= "{{ project.thumbnail-path }}" alt= "{{ project.thumbnail-alt }}">
            </div>

            <div class="project-summary-text">
                <h2 class="project-title"> {{ project.project-title }} </h2>
                <p class="project-company-meta"><a href= "{{ project.company-link }}" class="project-company-link">{{ project.company-name }}</a>  <i class="fa-solid fa-star-of-life fa-xs"></i>  {{ project.company-industry }}  <i class="fa-solid fa-star-of-life fa-xs"></i>  {{ project.company-type }}</p>
                <p class="project-application-type">{{ project.application-type }}</p>
                <p class="project-my-impact">My impact: {{ project.my-impact }}</p>
                {% if project.WIP == true %}
                  <button disabled>Full project coming soon</button>
                {% else %}
                  <a href="{{ project.slug }}"><button>See project <i class="fa-solid fa-arrow-right-long"></i></button></a>
                {% endif %}
            </div>
            </div>
          {% endif %}
        {% endfor %}
</div>
