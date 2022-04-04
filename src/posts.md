---
layout: layouts/base.njk
description: Hello, I'm a human on the internet who occasionally does cool projects.

eleventyNavigation:
  key: Posts
  order: 3
---
## Recent Posts
{% for post in collections.posts | reverse %}
- [{{ post.data.title }}]({{ post.url | url }}) - {{ post.date | toISODate }}
{% endfor %}

[//]: # (TODO: add section for external posts written by me once I have some)
