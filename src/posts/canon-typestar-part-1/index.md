---
title: Figuring out the Canon Typestar 7 (Part 1)
description: In this series of posts, I'll be going into more detail about the Canon Typestar 7 thermal typewriter than
  any sane person could possibly need. Let's just start with the basics for now though.
date: 2022-05-26
layout: layouts/post.njk
card_type: summary_large_image
thumb: 
  url: /posts/canon-typestar-part-1/typestar-7.jpg
  alt: A photo of the Canon Typestar 7 typewriter with a piece of paper inserted and some text printed.
header:
  url: typestar-7.jpg
  filter: true
  alt: A photo of the Canon Typestar 7 typewriter with a piece of paper inserted and some text printed.
tags:
- Typestar 7
- vintage tech
- typewriters
- electronics
- reverse engineering

eleventyNavigation:
  key: canon-typestar-part-1
  parent: Posts
---

Typewriters are one of my more recently acquired hobbies; they first piqued my interest when I inherited my
grandfather's Silver-Reed EX-42 "Penman" electronic typewriter in early 2021. I found that I had a much easier time
getting my thoughts out onto paper when using it, and so this quickly turned into me acquiring a small collection of
mostly electronic typewriters. Until recently, all of my typewriters were impact-based ones 
([daisy wheel](https://en.wikipedia.org/wiki/Daisy_wheel_printing) electronics as well as a 
[typebar electric](https://www.youtube.com/watch?v=IouRmZ_JlpE)). There's certainly something to be said about their
tactile nature, but none of them are particularly quiet or small. I'm going to be heading off to university in the fall,
and so I wanted to get a typewriter I could feasibly take with me and use without my roommates wanting to kill me. 

Canon typewriters are something I had been eyeing up for a while, since they seem to be of decent quality, look nice,
and the ribbons aren't usually too hard to find. At this point I had also recently discovered thermal typewriters, which
use a non-impact thermal print head and can therefore be much quieter, as well as being significantly smaller. The
thermal transfer ribbons they use aren't nearly as easy to find, but they're able to print directly onto thermal paper
which is an interesting trade-off. Letter-size thermal paper isn't easy to find, but it's far more available than the
ribbons (fax paper rolls are also an option).

## Why the Typestar 7?

![A photo of the Canon Typestar 7 typewriter with a piece of paper inserted and some text printed.](typestar-7.jpg "My
Typestar 7, after a bit of cleaning and refurbishment.")

Canon offered a number of different Typestar models from the early to mid-1980s all the way up until the late 1990s. The
model numbers are extremely confusing in typical Canon fashion, which makes it hard to get a good timeline. For example,
the Typestar 3 is actually ~4 years _newer_ than my Typestar 7. The earlier models are fairly lacking in features (e.g.
no text memory), but by the later models there was no longer much demand for typewriters and so they were cost-cut to
hell and back (although some actually got higher-quality print heads in the process, somehow).

The Typestar 7 (from 1985) is, as far as I can tell, the peak of the Typestar line. It has more features than all the
models that came before it, while also having less cost-cutting than those that came after. There were 2 things in
particular about the Typestar 7 that stood out to me, however: the cartridge slot and the interface port. The Typestar 6
also has a cartridge slot (incompatible with this one, unfortunately), but the 7 seems to be the only one that has the
interface port. I'll be writing separate blog posts going into more detail about both of these, but there'll be a brief
overview later in this post.

## Getting my Typestar, and an extremely lucky surprise

I had "Canon Typestar" as a saved search on eBay and Goodwill for a few months, but all the listings I was finding were
flawed in some way: wildly overpriced, non-functional, local pickup only, and in one case all 3! At long last, I found a
Goodwill listing for one in mid-March that looked quite appealing. It was in good condition, came with the AC adapter, a
cartridge, and even some thermal paper, and to top it all off it came in this fancy Samsonite briefcase with a custom
foam insert to hold everything in place. 

![A photo of my Typestar 7 and some of its accessories in its carrying case.](case.jpg "The goods.")

After making sure it was still functional (and observing that some keys were pretty unreliable), I got to taking it
apart to clean things up a bit. It had been well-kept, but there was some dust and gunk I wanted to get rid of before
using it much more. Luckily, it's not difficult to get it cracked open: just take out the 4 Phillips head screws on top
(2 towards the back and another 2 under the front corners of the lid) and then squeeze the top casing slightly in front
of the platen knobs to release the clips. After taking the top casing off, the keyboard and display can be lifted right
out, with just a ribbon cable holding them in.

![A photo of my Typestar 7 with the top casing and keyboard removed](internals.jpg "Inside the Typestar. It's
clear that it was built to a certain cost, but is still quite well-made.")

Comparing this to the later Typestar models shows just how much was cut:

![A photo of a Typestar 10-II, disassembled. About 1/3 of the internal area is empty.](typestar-10-ii.png "Inside 1995's
Typestar 10-II, courtesy of [mavica](https://maple.pet). The longer you look the worse it gets.")

### Keyboard

Opening it up also gave me a chance to take a look at the keyboard, which has a very interesting design. It uses rubber
domes (pretty nice ones, actually), but in these mostly self-contained switches. Most other rubber dome keyboards have
said domes on a single sheet of rubber that covers the entire keyboard. I'm not sure if these "switches" were a custom
Canon design or something off-the-shelf, but taking this approach allows for the use of a metal plate which helps make
the keyboard much sturdier. However, this design allows for dust to get in between the switches and the PCB which is
exactly what had happened with mine.

![A photo of the keyboard/display assembly from the Typestar 7, disassembled to show the underside of the switches and
the contacts.](keyboard-internals.jpg "Separating the plate/switches from the PCB")

![A photo of the Typestar's keycaps laid out to dry on a towel, showing their undersides.](keycaps.jpg "The keycaps are
quite nice as well, they use strange mounts but are all double-shot and seemingly PBT.")

### Manual

As a responsible internet citizen, I scanned it. [Here's the PDF](manual.pdf). It does a good job of explaining all of
the features, and I especially enjoy the mascot appearing on a few pages.

![An illustration of an anthropomorphized Typestar mascot.](mascot.png "Just look at this little guy.")

### Ribbon

![A photo of the ribbon used by most Canon Typestar typewriters.](ribbon.jpg "One of the elusive IR-50 ribbons.")

For whatever reason, the thermal transfer ribbons used by many of these typewriters are nearly impossible to find, 
especially compared to their daisy-wheel counterparts. Mine came with a partial ribbon, but it doesn't have much life
left. I got an IBM Quietwriter (IBM's line of thermal typewriters and printers) high-yield ribbon off eBay to see if
that might offer a cheaper solution, since they're readily available. Unfortunately, it resulted in absolutely nothing
being printed. I'll need to try other thermal transfer ribbons to see if any of those might work and can be transplanted
into the existing ribbon cases (possibly one of the non-high-yield Quietwriter ribbons). Luckily, this isn't a big deal
because of:

### Thermal Paper

Thankfully, there's an alternative to using the ribbons, and it's far more available. This is a thermal typewriter after
all, and so any normal thermal paper will work. Of course, most thermal paper these days is narrow, and intended for
receipt printers or calculators. However, there are fax machines that also use a thermal print mechanism, and so rolls
of letter-size fax paper can be had for cheap. My Typestar also came with a small stack of 8.5"×11" thermal paper, which
is a bit more practical. I can't tell if it's still manufactured anymore, but packs of paper like this occasionally show
up for sale online as either Pentax 201960 or Brother LB3635.

![A photo of a roll of fax paper with some printing on it, showing its smooth texture.](thermal-paper.jpg "I'm not used
to having slightly shiny paper (or one 98-foot-long sheet).")

Handling this paper is a bit strange, since it really just feels like a giant receipt. It's much smoother than typical
printer paper, which also has some interesting effects on the appearance of daisy wheel prints (more on this in a future
post). Using thermal paper with the Typestar makes its output quite a bit sharper than using the ribbon on regular
paper, but not necessarily in a good way. The print head on the Typestar is 26-dot, which looks fine from a distance but
can look pretty pixelated up close. The ribbon's output isn't quite as sharp, but this actually helps to mask the
limited resolution of the print head. Neither are as good as a daisy wheel typewriter, but it's a price I'm willing to
pay for portability and convenience.

![A scan of output from the Typestar using both the thermal paper on its own and the ribbon.](font-comparison.png "Plain
thermal on top, ribbon on bottom. I think my ribbon is on its last legs but its smoothing effect is still visible (click
for full resolution giant PNG).")

### Cartridges

![The cartridge slot on the side of the Typestar 7 with the door open and a cartridge inserted.](slot.jpg "I like
the little switch that allows it to detect when the cartridge door is open.")

As soon as I saw the cartridge slot on the side of the Typestar 7 (and 6, although its is incompatible), my interest was
piqued. There's just something about cartridges in electronics that always fascinates me, and this was no exception. Its
primary purpose is to allow the use of 1 entire additional typeface, or "Typestyle", as Canon called them. According to
the manual, Canon offered 5 of these cartridges (Courier Italic 10, Courier 12, Cubic PS, Dictionary PS, and Armeria PS)
along with Courier 10 being built-in to the typewriter. Unsurprisingly, these cartridges are pretty much unobtainable
these days.

I was happy to find that my Typestar came with a Typestyle cartridge already in the slot, for the Cubic PS
(proportionally spaced) font. It's the font at the bottom of each part of the type sample above. The Typestar 5 had this
font built-in (instead of having a cartridge slot) so in some ways this is a bit of a downgrade; I wish the cartridge
was a third font option instead of replacing one of the built-ins from previous models. I'm quite curious about what the
data on the Typestyle cartridges look like, so that'll be the main focus of Part 2 of this series.

![Cartridges for the Cubic PS font and 8kB RAM, showing the 40-pin connector on the Typestyle cartridge.](cartridges.jpg
"The cartridges use a 40-pin connector with the same pitch as a CompactFlash card (0.05\"/1.27mm).")

On the Typestar 7, the cartridge slot serves another purpose: RAM cartridges. It has around 6 kB of internal RAM that's
usable for text storage, but by using a RAM cartridge you can further expand its capacity. Unfortunately, this is
implemented in a pretty annoying way. There are 26 text storage slots (A-Z) on both the internal memory and the
cartridge, but the document on the cartridge has to be copied to the internal memory before it can be interacted with.
Canon was nice enough to provide a short preview of the text in each slot, but being able to directly work with it
would've been far more convenient. Mine came with an 8 kB cartridge, which especially shows the problem with this
approach since it's possible to have more on the cartridge than the internal memory can handle.

The RAM cartridges have a replaceable button cell battery to persist their contents, and against all odds the battery in
mine _still works_. It has the previous owner's resume from the late 80s, among other things. The label on it suggests
the battery was last changed in 1987, so I have absolutely no clue how it hasn't died yet. A few Canon daisy wheel
typewriters seem to support the same RAM cartridges, so I wonder what would happen if I put this one into one of those.
Would they use the same document format? Perhaps I'll find out someday. Chances are putting a Typestyle cartridge in a
daisy wheel typewriter would just do nothing, but I want to try that too.

### Interface Port

This is the primary advantage the Typestar 7 has over the Typestar 6, on the right side of the device near the DC jack
is a 9-pin D-sub-style connector. It's not a true D-sub connector, since there are no retaining screws and it's recessed
to the point that anything with those won't even come close to connecting. It just so happens to be exactly the same as
an Atari joystick port though, which makes it much easier to find something that can plug into it. Some Panasonic
typewriters used a very similar port, but I doubt it's electrically compatible.

![The 9-pin interface port on the Typestar 7, next to the DC jack and power switch.](interface.jpg "I think the previous
owner may have been trying to figure out this port too, the shield is a bit damaged.")

The manual mentions the model I/F-30 parallel and serial adapters being available for purchase to use with the interface
port, but so far I haven't managed to find a single image of it online, let alone one for sale. I've done a small amount
of reverse engineering on this port, but so far haven't managed to figure much of anything out. Once I have the
knowledge and access to equipment necessary to investigate it more, I'll write a separate post about how the port works.

Interestingly, much like the RAM cartridges seemingly being usable on certain Canon daisy wheel typewriters, it appears
that the interfaces were as well. Based on images I've found on eBay, both the S-15 and S-68 support it (and mention the
I/F-30 right on the box).

### The Surprise

Along with the thermal paper and manual in the briefcase for my Typestar, there were a few other pieces of paper. I
didn't think much of them, but took another look as I was going through the case a few days later. What I found was
quite possibly the single most valuable thing to have come with my Typestar:

![A circuit diagram for the Typestar 7, showing all ICs and I/O. The previous owner highlighted some of the lines
running to/from the interface port.](pcb.jpg "Seriously, what are the chances? (click for full resolution)")

That's right, I somehow ended up with a complete circuit diagram for the Typestar 7. I can't tell if it's official or
not, and there do seem to be a few inconsistencies (e.g. the MCU is an HD6303Y0P on the diagram, but HD6301Y0P on the
actual PCB), but having a diagram right here describing all the pins makes trying to reverse engineer this **so much
easier**. It looks like I wasn't the first though, those highlights on the interface port's data lines were made by the
previous owner. The diagram has the address and data buses shown as thick white and black lines respectively, which also
helps to make it easier to read.

Having this diagram also shows some other interesting things, all the chips appear to be off-the-shelf except for the
MB62H177 which is a custom Canon chip. It's also interesting to note that the address lines for the cartridge slot go
from A0 all the way up to A15 (so a maximum address of 2<sup>15</sup>/65536 is possible). The ROM chips in the Typestyle
cartridges are only 16 kB (more on that in the next part) and 8 kB seems to have been the largest size of RAM cartridge
available (anything larger than that would've been an incredible pain to use anyway with the swapping requirement), so I
wonder what possible purpose connecting the cartridge slot to all 16 bits of the address bus could serve.

## Wrapping up

Although I have quite the backlog of Strange Electronics&trade; left in my collection to tinker with and learn more
about, the Typestar 7 has so far been a fun device to mess around with. Many of its reverse engineering challenges are
just past my current knowledge/skill level, which is a great way to push myself to improve my electronics knowledge.
It's also a very pleasant device to use, even if it does end up sacrificing some quality for the sake of portability and
reduced noise.

Since all the other typewriter-like devices I have are impact-based, using the Typestar 7 definitely makes me curious to
try some of the other eccentric typewriter designs of days gone by. In particular, typewriter pen plotters such as the
Silver-Reed EB-50, the Panasonic Penwriter series, and the Brother BP-30 (although they all use the same mechanism) have
caught my eye for a while. I really need to free up some space before I get anything else though, as well as finishing
up some of my other "projects". Next on my list is extracting the data from the Typestyle cartridges and figuring out
their format.

![A photo showing one of the Canon Typestyle cartridges, disassembled.](soon.jpg "Coming soon!")
