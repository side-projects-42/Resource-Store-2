Over drinks this evening [Kohsuke](https://twitter.com/kohsukekawa) pointed out that he never saw a blog post about [PagerDuty](http://www.pagerduty.com).

[<img src="http://agentdero.cachefly.net/continuousblog/images/pagerduty_logo.png" alt="pagerduty.com" width="360" />](http://www.pagerduty.com)

If you’ve never worked in a sysadmin role or in any other position that would require an on-call rotation, then you may have never seen PagerDuty.

In essence the service provides a great series of integration points with Pingdom or Nagios for handling monitoring. As an infrastructure guy (part time), I can honestly say it’s a great tool and I’m grateful to PagerDuty for supporting Jenkins with our own account to help manage project infrastructure.

A couple weekends ago I finished setting up [Nagios](http://nagios.jenkins-ci.org/nagios3/) (read-only username/password: `jenkins`/`jenkins`) for critical project services which by itself is a good step forward. Combine that with PagerDuty’s Nagios integration and a solid on-call rotation, and I’m more confident than I’ve ever been that Kohsuke or myself could actually take a vacation!

Check them out, and be sure to thank them on Twitter at <span class="citation" data-cites="PagerDuty">\[@PagerDuty\]</span>(https://twitter.com/pagerduty) for supporting Jenkins!
