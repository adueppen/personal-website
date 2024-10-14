---
layout: layouts/base.njk
pagination:
  data: projects
  size: 1
  alias: project
permalink: "projects/{{ project.name | slugify }}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ project.name }}"
    parent: Projects
  title: "{{ project.name }}"
extraStyles:
- /styles/code.css
---
{{ project.readme | safe }}

## Links

More information about this project is available at the following locations:

{% for name, url in project.links -%}
- [{{ name }}]({{ url }}/)
{% endfor %}
