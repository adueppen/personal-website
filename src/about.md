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
science class offered at my high school, and I've met many of my closest friends on the internet as a fellow
computer-obsessed individual. I'm currently a student at the [University of Wisconsin-Milwaukee][1] majoring in computer
science and working as a CS tutor and Supplemental Instruction leader in the UWM [Student Success Center][2]. I've also
worked with DevOps and Jira administration as an intern at [TDS Telecom][3].

In more recent years, I've begun collecting some vintage technology, particularly electronic typewriters and daisy wheel
printers. There is very little information out there about them, so I'll be writing some blog posts here about these
forgotten devices as well as anything else I feel like writing about. At UWM, I've also been contributing to Tom Haigh's
[Retrocomputing Lab][4], so look forward to more about that too!

My pronouns are he/they (I don't have a particular preference).

[1]: https://uwm.edu/
[2]: https://uwm.edu/studentsuccess/
[3]: https://tdstelecom.com/
[4]: https://tomandmaria.com/retrolab/

# Links

Here are some relevant links, including me on other platforms. In general, any account with the username **adueppen**
is most likely me.

{% for i, site in siteData.links -%}
- {{ site.siteName }}: [{{ site.displayText }}]({{ site.url }})
{% endfor -%}
