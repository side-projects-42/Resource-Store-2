Embed your GitHub contributions calendar anywhere!
==================================================

<img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" class="spinner" />

Crunching [@IonicaBizau](https://github.com/IonicaBizau)'s contributions just for you.

If you want to know more about this project, [check out the GitHub repository](https://github.com/Bloggify/github-calendar).

Embed guide &lt;3

    <!-- Include the library. -->
    <script
      src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"
    ></script>

    <!-- Optionally, include the theme (if you don't want to struggle to write the CSS) -->
    <link
       rel="stylesheet"
       href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
    />

    <!-- Prepare a container for your calendar. -->
    <div class="calendar">
        <!-- Loading stuff -->
        Loading the data just for you.
    </div>

    <script>
        GitHubCalendar(".calendar", "your-username");
        // or enable responsive functionality
        GitHubCalendar(".calendar", "your-username", { responsive: true });
    </script>
                

<span class="octicon octicon-code"></span> with <span class="octicon octicon-heart"></span> & JS by [IonicaBizau](https://ionicabizau.net) @ [Bloggify](https://bloggify.org)
