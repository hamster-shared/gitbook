# Get Started

* [WHAT IS CONTINUOUS INTEGRATION (CI)?](#what-is-continuous-integration-ci)
* [CI BUILDS AND AUTOMATION: BUILDING, TESTING, DEPLOYING](#ci-builds-and-automation-building-testing-deploying)

Welcome to Hamster CI! This page provides some contexts and terminologies used throughout the platform and documentation, which might be helpful, if you are new here or new to Continuous Integration (CI).

## What Is Continuous Integration (CI)?

Continuous Integration is the practice of merging in small code changes frequently - rather than merging in a large change at the end of a development cycle. The goal is to build healthier software by developing and testing in smaller increments. This is where Hamster CI comes in.

As a continuous integration platform, Hamster CI supports your development process by automatically building and testing code changes, providing immediate feedback on the success of the change. Hamster CI can also automate other parts of your development process by managing deployments and notifications.

## CI Builds and Automation: Building, Testing, Deploying 

When you run a build, Hamster CI clones your GitHub repository into a brand-new virtual environment, and carries out a series of tasks to build and test your code. If one or more of those tasks fail, the build is considered broken. If none of the tasks fail, the build is considered passed and Hamster CI can deploy your code to a web server or application host.

CI builds can also automate other parts of your delivery workflow. This means you can have jobs depend on each other with Build Stages, set up notifications, prepare deployments after builds and many other tasks.


## Action, Step, Stage and Job

In the Hamster CI documentation, some common words have specific meanings:

* action - the smallest unit to perform tasks. Hamster provides several actions to meet basic requirements. Compare the main actions, such as shell action, git action, remote action, etc

* step - the sequential action of a step. 

* stage - a group of step that run in parallel as part of a sequential build process composed of multiple stages.

* job - an automated process that clones your repository into a virtual environment and then carries out a series of phases such as compiling your code, running tests, etc. A job fails, if the return code of the script phase is non-zero. A job is a set of steps that execute a series of commands, using the specified runner.

## What is Continuous Delivery (CD) ?

Continuous delivery usually means a developer’s changes to an application are automatically bug tested and uploaded to a repository (like GitHub or a container registry), where they can then be deployed to a live production environment by the operations team. It’s an answer to the problem of poor visibility and communication between dev and business teams. To that end, the purpose of continuous delivery is to ensure that it takes minimal effort to deploy new code.

Continuous deployment (the other possible "CD") can refer to automatically releasing a developer’s changes from the repository to production, where it is usable by customers. It addresses the problem of overloading operations teams with manual processes that slow down app delivery. It builds on the benefits of continuous delivery by automating the next stage in the pipeline.




