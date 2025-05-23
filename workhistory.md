---
layout: default
permalink: /cv
title: "Experience & Skills"
---

# Experience & Skills

<p class="subtle-text"> Want a downloadable PDF version of this? <a href="./assets/CV_weiweilin.pdf" target="_blank" class="subtle-text">Here you go.</a></p>

As a lifelong learner, I'm a proudly self-taught designer with roots in visual design and a background in neuropsychology & computer science. Looking to combine and expand on my interests, I found my way to product and UX design, and haven't looked back since.

Most recently, I lead a team of product designers working on cross-functional UX alignment at [Unity](https://unity.com/).

<div class="CV">
        {% for job in site.jobs reversed %}
        <div class="CV-row">
            <div class="CV-table-date">
                    <p class="position-headers">{{ job.job-date }}</p>
            </div>
            <div class="CV-table">
                    <p class="position-headers">{{ job.job-position }} @ <a href= "{{ job.company-url }}"> {{ job.company-name }} </a></p>
                    <p class="position-responsibilities"> {{job.content}} </p>
            </div>
        </div>
        {% endfor %}
</div>

## Skills & Tools

I'm well-versed in UX skills & tools across the UX spectrum. I love designing holistic, precisely detailed, polished experiences, and craft user research with the same care to answer the right questions for the product.

I might have been a UX developer in another life, and I'm not ruling it out for this one. I love digging into code to see how it works, and occasionally write my own (like this website!). I take great pleasure in getting into the nitty-gritty of technical concepts.

I could never work alone. I love working with people with all sorts of backgrounds, and I'm constantly learning new ways of working together to leverage the skills of groups I work with. Strategic, intentional communication is at the heart of everything I do: from high-level stakeholder presentations to having effective, well-framed 1:1 conversations.

<i>Je parle français aussi!</i>
