---
layout: layouts/base.njk
description: Hello, I'm a human on the internet who occasionally does cool projects.

eleventyNavigation:
  key: Projects
  order: 1
---

# Projects

I absolutely love to contribute to the world of Open Source Software, so here are a few projects that I've either
created or have made contributions to:

- [Material Open Source](https://github.com/materialos): MOS was a collaborative OSS project made by people all over the
	world, with the goal of creating a comprehensive set of graphics, especially product icons, making use of Google's
	Material Design standards. At present, the project has around 660 icons from over 40 different contributors. I
	contributed around 75 icons to the project, primarily representing Linux applications.
- [Unicorn Utterances](https://unicorn-utterances.com/): Unicorn Utterances is a community-based, open source website
	that teaches a variety of computer science topics. I help to maintain the site and research topics for posts, and I
	have contributed features such as a dark theme and a variety of bugfixes.
{% for project in projects -%}
- [{{ project.name }}]({{ project.name | slugify }}/): {{ project.blurb }}
{% endfor %}

More things I've contributed to can always be found on my [GitHub]({{ siteData.links.github.url }}) page.
