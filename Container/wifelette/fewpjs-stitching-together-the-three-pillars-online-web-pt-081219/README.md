Stitching Together the Three Pillars
====================================

Learning Goals
--------------

-   Identify the three essential pillars of front-end web programming
-   Cause a change to given code so that DOM updating effect is seen
-   Cause a change to given code so that server-side behavior is stubbed in
-   Cause a change to given code so that event listening has an effect

Introduction
------------

Knowing what web programming is and how its elements work together conceptually is an essential first step, but in order to help orient our upcoming lessons, let’s see it in action. In this lesson we’ve provided you a simple social media application called “Simple Liker.” You’ll see several posts which can be “liked” by clicking on the heart…well, they *could* be if the critical code hadn’t been commented out. This lesson will guide you in uncommenting the critical code so that you restore the “like” functionality. In subsequent lessons, you’ll learn the skills needed to create the pieces that you’ll stitch together in this lesson.

### Identify the Three Essential Pillars of Front-End Web Programming

We’ve introduced our three essential pillars of front-end web programming:

-   Manipulating the Document Object Model (DOM)
-   Recognizing JS events
-   Communication with the server

We also described the interaction that we want to make: “favoriting” an item on social media to turn an empty heart to red. Now, let’s pull it all together and see how it works by walking through some code.

### Cause a Change to Given Code So That DOM Updating Effect Is Seen

Meet our app, Simple Liker! It demos the favoriting action we’ve talked about and alerts you to what is happening at each step of the process. When all is working as it should, the action looks like this:

![working example of favoriting a post](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-stitching-together-the-three-pillars/three-pillars-02.gif)

Go ahead and open up `index.html` in your browser and give the heart a click. A fast way to do this is to use the `open` command in the command-line environment. From within the directory where this README lives, invoke: `open index.html`. If that doesn’t work, navigate to the directory where this README is located, and open the file.

Your experience will look something like this:

![non-working example of favoriting a post](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-stitching-together-the-three-pillars/three-pillars-01.gif)

… which is, nothing happens. That’s because we haven’t switched on the working code yet. We’re going to go through, step by step, find the code that makes each step work, and demo it to see how it looks in the browser.

Open up your `demo.js` file and take a look at everything there. Find the comments that begin with “Step 1.” Follow the instructions there to un-comment the code that locates the page element we want — in this case, the heart.

![demonstration of un-commenting step one](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-stitching-together-the-three-pillars/three-pillars-03.gif)

### Cause a Change to Given Code So That Server-Side Behavior Is Stubbed in

Next, in your `demo.js` file, find the comments describing Step 2, which sets up the mock server communication (our third pillar):

![demonstration of un-commenting step two](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-stitching-together-the-three-pillars/three-pillars-04.gif)

### Cause a Change to Given Code So That Event Listening Has an Effect

Now, find Step 3 in the commented code. It’s time to bring in the second pillar, events:

![demonstration of un-commenting step three](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-stitching-together-the-three-pillars/three-pillars-05.gif)

We’ve activated all the parts of our code that stitch in the three pillars of front-end web programming. Let’s go back to your browser and see what Simple Liker looks like in action.

![working example of favoriting a post](https://curriculum-content.s3.amazonaws.com/fewpjs/fewpjs-stitching-together-the-three-pillars/three-pillars-02.gif)

Conclusion
----------

We’re starting to see how the pieces work together now! Now we’re ready to dive into the individual pillars and learn more about how each function. First, we take on manipulating the DOM.

View [Stitching Together the Three Pillars](https://learn.co/lessons/fewpjs-stitching-together-the-three-pillars) on Learn.co and start learning to code for free.
