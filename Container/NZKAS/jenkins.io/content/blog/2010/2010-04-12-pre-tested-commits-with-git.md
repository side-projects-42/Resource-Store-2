At the first [Bay Area Hackathon](http://wiki.hudson-ci.org/display/HUDSON/BayAreaMeetup) in mid-2009, the topic du jour was “[pre-tested commits](http://wiki.hudson-ci.org/display/HUDSON/Designing+pre-tested+commit).” As potential implementations of the concept were discussed over burgers from <a href="http://www.brickhousesf.com/" id="aptureLink_gLlt1i6v1p">Brickhouse</a> in downtown San Francisco, we realized as a group a few things: first, those burgers were _delicious_, but more importantly: pre-testing commits is very-SCM dependent and involves a lot of moving parts. One of the positive changes that came out shortly after the meet up was the support for “Concurrent Builds”, allowing a job to be executed concurrently on different slaves, a precursor to pre-tested commit support. Fervor for the pre-tested commit feature lowered as time went on, the feature being too dependent on the SCM itself was generally accepted as the reasoning behind the feature languishing.

Chances are the feature is in fact too large for Hudson to support alone. It requires Hudson, the SCM and likely a third tool to work in concert together to perform such a feat.

With Git, and the phenomenal code review tool [Gerrit](http://code.google.com/p/gerrit/), and the [Gerrit plugin](http://wiki.hudson-ci.org/display/HUDSON/Gerrit+Plugin) by intrepid plugin developer, [Jyrki Puttonen](http://twitter.com/jyrkiputtonen), pre-tested commits with Hudson, Git and Gerrit _are_ possible.

For Git users more familiar with the distributed Git workflows, working with Gerrit should seem familiar. Gerrit has <a href="http://www.eclipse.org/jgit/" id="aptureLink_MoOPmIyV3m">JGit</a>, a Java implementation of Git embedded within it, along with an `sshd` stack, meaning Gerrit can masquerade as a “regular” Git remote repository. Developers can push and pull to the repository just as they can with any other Git repository (provided they have permissions of course). I won’t delve too much into using Gerrit specifically here, but the pre-tested workflow with Gerrit and Hudson would look something like this:

- Dev creates a topic branch to work on a change
- Code is written (and hopefully tested) and committed locally
- Dev pushes commit(s) to Gerrit
- Hudson job (set to Poll SCM) picks up the patch, runs the job and marks it as “+1 Verified” or “-1 Fails”
- If the job fails or is unstable, the change should be reworked or corrected (typically with <a href="http://www.kernel.org/pub/software/scm/git/docs/git-rebase.html" id="aptureLink_YL8glbfS7G">git-rebase(1)</a>)
- If Hudson says the change is good to go, it can be cherry-picked or pulled directly from Gerrit.

For example:

[<img src="http://agentdero.cachefly.net/continuousblog/gerrit_patch.png" width="520" />](http://agentdero.cachefly.net/continuousblog/gerrit_patch.png)

To learn more about Gerrit, check out the [project page on Google Code](http://code.google.com/p/gerrit/); information on the Gerrit plugin can be [found on the wiki](http://wiki.hudson-ci.org/display/HUDSON/Gerrit+Plugin).

---
