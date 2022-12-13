---
layout: layouts/base.njk
description: Hello, I'm a human on the internet who occasionally does cool projects.

eleventyNavigation:
  key: About
  order: 2
---
# Who am I?

I've had a passion for computers for nearly as long as I can remember, and I have fond memories of playing around on my
mom's old Macintosh Centris in my bedroom. This passion has shaped much of my life since then. I took every computer
science class that was offered at my high school, and I've met many of my closest friends on the internet as a fellow
computer-obsessed person. I'm currently a student at the [University of Wisconsin-Milwaukee](https://uwm.edu/) majoring
in computer engineering, and I've also worked with DevOps and Jira administration as an intern at
[TDS Telecom](https://tdstelecom.com/).

In more recent years, I've begun collecting some vintage technology, particularly electronic typewriters and daisy wheel
printers. There is very little information out there about them, so I'll be writing some blog posts here about these
forgotten devices as well as anything else I feel like writing about. At UWM, I've also been contributing to Tom Haigh's
[Retrocomputing Lab](https://www.tomandmaria.com/Tom/Retrolab), so look forward to more about that too!

My pronouns are he/they (I don't have a particular preference).

# Links

Here are some relevant links, including me on other platforms. In general, any account with the username **adueppen**
is most likely me.

{% for i, site in siteData.links -%}
- {{ site.siteName }}: [{{ site.displayText }}]({{ site.url }})
{% endfor -%}
