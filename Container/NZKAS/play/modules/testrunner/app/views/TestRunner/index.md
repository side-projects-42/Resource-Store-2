# Tests runner

**Select the tests to run**, then click \[Start\] and pray

working ...

<span id="start">Start !</span>   <span class="nbToRun">no</span> test<span class="nbToRunPluralize"></span> to run <span id="bms">([Bookmark this link to save this configuration](#)) - <span id="unselectAll">[Unselect all](#)</span></span> <span id="quickLinks"> <span id="sa">([Select all](#)</span> - <span id="ra">[Run all](#))</span> </span>

<span id="stop">Stop ...</span>  (running <span class="nbToRun">no</span> test<span class="nbToRunPluralize"></span>)

\#{if unitTests}

## There ${unitTests.size().pluralize('is', 'are')} ${unitTests.size()} unit test${unitTests.size().pluralize()},

- <span class="touch">+</span>[${test.name.replace('.','/').replace('$','.')}](<@%7BTestRunner.run(test.name+'.class')%7D>)

%{ tis = true; }% \#{/if} \#{if functionalTests}

## ${tis ? '' : 'There '+functionalTests.size().pluralize('is', 'are')} ${tis && !seleniumTests ? 'and' : ''} ${functionalTests.size()} functional test${functionalTests.size().pluralize()},

- <span class="touch">+</span>[${test.name.replace('.','/').replace('$','.')}](<@%7BTestRunner.run(test.name+'.class')%7D>)

%{ tis = true; }% \#{/if} \#{if seleniumTests}

## ${tis ? '' : 'There '+seleniumTests.size().pluralize('is', 'are')} ${tis ? 'and' : ''} ${seleniumTests.size()} selenium test${seleniumTests.size().pluralize()},

- <span class="touch">+</span>[${test.replace('.test.html','')}](@%7B'/public/test-runner/selenium/TestRunner.html'%7D?baseUrl=$%7Bprotocol%7D://localhost:$%7Bport%7D&test=/@tests/$%7Btest%7D.suite)

\#{/if} \#{if !functionalTests && !unitTests && !seleniumTests}

## There is no test to run

\#{/if}

Play is running a selenium test... <span id="stopSelenium">Stop it</span>
