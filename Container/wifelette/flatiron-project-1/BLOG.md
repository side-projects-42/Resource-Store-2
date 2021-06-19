I’ve written code before, lots of code! But always little bits and enhancements. This past week I spent time writing my first start-to-finish program, and not shockingly, it’s worlds more fun!

I’ve enjoyed working through the curriculum and learning the techniques, but frankly that stuff is way more of a slog and way less fun. I often forget how much I enjoy the actual programming until I’m back in a greenfield project, like last week.

Some of it is probably silly. Needing to tick off specific boxes brings us all back to grade school, and words like homework and due dates start becoming more important (and more intimidating) than the work itself. But it’s more than that.

In the lessons, we’re learning to pass specific tests. For structural reasons, I often find that the tests restrict my creativity, but also that they focus on specific techniques, rather than on finding the holistically best way to accomplish the task at hand. And while I understand *why* that’s happened, it does sort of suck a lot of the joy out of it. It’s also a bit painful to comment out something I’m pretty sure is *better* code, because I need to instead use a very specific method or implementation.

The other thing is that the learnings along the way don’t leave much room for creativity. When writing my CLI gem, I ended up incorporating a *ton* of tools, gems and tricks that I had to learn along the way, as I came up with ideas for enhancements. I had more fun with the frills of my project than the baseline coding, and there’s nothing wrong with that. It kept me motivated, kept it fun and fresh, and I felt like I was learning new things all along the way.

I also came up with some personal modes of operating along the way, mostly as I learned from other programmers while investigating tools and techniques. I suspect a list like this will grow over time, though as I get more experienced and it becomes second nature it may stop being a formal list.

Some of my things for now, in the beginning stages of my disciplined coding career:

-   I’m using `rubocop` to help keep me on track with best practices. That said, it’s *entirely* too aggressive! There are SO many cops in there that are more frustrating than helpful, and if the entire program is a mess of squiggly underlines, it may as well have none at all! So I’ve been addding to my `rubocop.yml` file, disabling specific cops as it makes sense, and now things are much saner. I’ve got this saved, so I can add it to new projects any time I start them.
-   While working on my CLI project I kept three different markdown documents that I added to along the way; see the `Markdown Docs` section below for details.
-   Inline docs! I wasn’t doing these at first, since things were fairly simple, but I went back and added a bunch later. It’s less about what I understand right now, and more about whether or not I’ll understand them when I come back to this in a week or a month or a year. And in this particular case, also about anxiety about remembering it all during my project review 🤣
-   VSCode Extensions! TL;DR if you think of it along the way, it *probably* already exists, and is even better than you could’ve imagined. While working on this particular project, I added `Better Comments`, `Markdown Preview Enhanced`, `Markdown Shortcuts` and my favorite of them all, `Todo Tree`.

My Markdown Docs
----------------

Along the way I created and maintained a series of Markdown files to document important things I’d want to reference later. At first it was just utility, but as things went on it was pretty fun. I felt a significant sense of accomplishment as these documents grew, and as I went back and finessed my documentation, because my understanding had improved.

\#\#\#`Design.md`

This was where I started the project. I didn’t want to accidentally fall into waterfall design and overarchitect, but I wanted to pseudo-code/write out the very basic first method or two. The rest would follow as I coded.

Then I also kept going back and adding to this document along the way, as I had thoughts or explanations worth retaining that were outside of what belonged in inline docs.

\#\#\#`Notes.md`

This is where I documented the various tools, gems, etc that I employed along the way, along with links to docs, and motivations.

You can tell how into the code I was at each step; for my first few tools, there are long explanatory paragraphs. For later ones, there are excited one liners about the functionality, and then I just rushed off to implement.

\#\#\#`Friction.md`

This was where I noted issues with external tools that I couldn’t stop to remedy right then, but would like to one day. Mostly it’s ideas for PRs or issues to file with open source projects.

It’s worth noting that many of these PR ideas are well over my head a this point. Still, I’m excited about the idea of coming back in a few weeks or even months to tackle them when I have the skills!

It works!
---------

The punchline: my program works! It’s not going to change any lives, but I thankfully found an idea I’ll actually get use out of. I don’t think it casts a wide net in its current form, but who knows? Maybe I’ll stick with it and release it publicly. It’ll need more features and lots of tidying up as I learn more and get better, but I’m excited about the prospect.
