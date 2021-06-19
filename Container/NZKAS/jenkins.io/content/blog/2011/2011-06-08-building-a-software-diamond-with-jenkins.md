\[**Editor’s Note:** _This is a guest post from Jenkins community member [Tom Rini](http://www.linkedin.com/in/tomrini)_\]

Alternatively: **How to make your parallel jobs kick one last job at the end**

Many of us have had occasion to think: “_I could make this project build quicker if I could just run parts in parallel and then one final job to wrap it up._”

Well, good news! Jenkins is here to help! With the [Join Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Join+Plugin) you can do just that. Over on the confluence page it’s got a number of examples and fancy flow charts. But the take-away is that if you can describe the flow, you can make it happen. But you’re saying “wait, I need to pass information around between the jobs.”

We’ve got that one covered for you too with the [Parameterized Trigger Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Trigger+Plugin). And here’s the best part, these two can work together! With both plugins installed you can follow the steps listed in the Build Parameters section of the Join Plugin.

[<img src="http://agentdero.cachefly.net/continuousblog/join_trigger.png" title="Click to enlarge" alt="Click to enlarge" width="540" />](http://agentdero.cachefly.net/continuousblog/join_trigger.png)

And as they say, _now you’re cooking with gas!_
