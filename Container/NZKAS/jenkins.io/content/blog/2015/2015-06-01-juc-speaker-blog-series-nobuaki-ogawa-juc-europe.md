--- :layout: post :title: 'JUC Speaker Blog Series: Nobuaki Ogawa, JUC Europe' :nodeid: 552 :created: 1433186541 :tags: - general - jenkinsci :author: hinman ---

<img src="https://jenkins-ci.org/sites/default/files/images/Jenkins_Butler_0.png" width="114" height="128" />

On the 23rd and 24th June, I’ll attend [Jenkins User Conference 2015 Europe](http://www.cloudbees.com/jenkins/juc-2015/europe) in London. And I’ll present a lightning talk about Continuous Delivery with Jenkins.

Here is short overview of what I’d like to talk about there.

1. Continuous Build

My starting point was to get to know JenkinsCI. Our developers used JenkinsCI to make the Continuous Build of our software.  
So, our developing environment was quite Jenkins friendly from the beginning.

2. Continuous Deploy

--- Virtual Machine ---

We had to have an environment where we could deploy our new build. As we are big fans of Microsoft, we decided to use Azure as our environment to make Continuous Testing.

How do we control it? We use [Powershell](https://odehne.wordpress.com/2013/12/01/dealing-with-virtual-machines-in-windows-azure-using-powershell/), which can be executed with JenkinsCI.

--- Product Deployment ---

How did we achieve the Continuous Deploy? Actually, my boss, who is DirectSmile’s Yoda developed a very powerful tool called [“DirectSmile Installation Service”](https://odehne.wordpress.com/2012/03/26/continuous-deployment-of-directsmile-products/) to enable this.

So we integrated this tool within JenkinsCI, and now Jenkins can deploy DirectSmile products on any target server with just one-button-click!

3. Continuous Testing

Of course, we use JenkinsCI to make the Continuous Testing.  
How do we do that?  
We use [Selenium](http://www.seleniumhq.org/) to make and run tests. So we can cover most features and we can execute it at anytime.

We are doing it after every new version build, to obtain Continuous Delivery.

4. Continuous Sharing

I think it’s important to share all knowledge and experiences I have had with others, especially those whom have just started with Continuous Delivery.

Don’t worry, it is probably much easier than you think.

As a part of this practice, I’d like to share all my knowledge and experiences with how easy it is to achieve Continuous Delivery with Jenkins at JUC 2015.

I’m really exciting to meet and talk about this there! See you at JUC 2015 in London!

About Me

My name is Nobuaki Ogawa, from Japan, and I currently work in Berlin, Germany for the software company [DirectSmile](http://directsmile.com/) as a DevOps QA Manager.

From the very first time I used JenkinsCI, it helped me a lot. Almost all the work I did last year was mainly with Continuous Delivery with Jenkins.

From Build to Deploy, Test, and even Maintenance and Monitoring, my Jenkins takes care of everything.

It was super easy to achieve Continuous Delivery in the DirectSmile world with the help of JenkinsCI.

<img src="http://jenkins-ci.org/sites/default/files/images/02-03-1530-ogawa_0.jpg" width="152" height="182" />

This post is by Nobuaki Ogawa, DevOps QA Manager at DirectSmile. If you have your ticket to [JUC Europe](http://www.cloudbees.com/jenkins/juc-2015/europe), you can attend his talk ["Jenkins Made Easy"](http://www.cloudbees.com/jenkins/juc-2015/abstracts/europe/02-03-1530-ogawa) on Day 1.

_Still need your ticket to JUC? If you register with a friend you can get 2 tickets for the price of 1! [Register here for a JUC near you.](http://www.cloudbees.com/jenkins/juc-2015/)_

Thank you to our [sponsors](http://www.cloudbees.com/jenkins/juc-2015/sponsors) for the 2015 Jenkins User Conference World Tour:

<img src="http://jenkins-ci.org/sites/default/files/images/sponsors-06032015-02_0.png" width="598" height="579" />
