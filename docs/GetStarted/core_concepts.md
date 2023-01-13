---
sidebar_position: 1
---

# Core Concepts for DevOps

## What Is Continuous Integration (CI)?

Continuous Integration is the practice of merging in small code changes frequently - rather than merging in a large change at the end of a development cycle. The goal is to build healthier software by developing and testing in smaller increments. This is where Hamster CI comes in.

As a continuous integration platform, Hamster CI supports your development process by automatically building and testing code changes, providing immediate feedback on the success of the change. Hamster CI can also automate other parts of your development process by managing deployments and notifications.

## CI Builds and Automation: Building, Testing, Deploying

When you run a build, Hamster CI clones your GitHub repository into a brand-new virtual environment, and carries out a series of tasks to build and test your code. If one or more of those tasks fail, the build is considered broken. If none of the tasks fail, the build is considered passed and Travis CI can deploy your code to a web server or application host.

CI builds can also automate other parts of your delivery workflow. This means you can have jobs depend on each other with Build Stages, set up notifications, prepare deployments after builds and many other tasks.

## Action, Step, Stage and Job

In the Hamster CI documentation, some common words have specific meanings:

* action - the smallest unit to perform tasks. Hamster provides several actions to meet basic requirements. Compare the main actions, such as shell action, git action, remote action, etc

* step - the sequential action of a step.

* stage - a group of step that run in parallel as part of a sequential build process composed of multiple stages.

* job - an automated process that clones your repository into a virtual environment and then carries out a series of phases such as compiling your code, running tests, etc. A job fails, if the return code of the script phase is non-zero. A job is a set of steps that execute a series of commands, using the specified runner.


## Infrastructure and Environment Notes

Hamster CI plans to offer a few different infrastructure environments, so you can select the setup that suits your project best. Now Ubuntu Linux is available, macOS and Windows will come soon.

* Ubuntu Linux - these Linux Ubuntu environments run inside full virtual machines, provide plenty of computational resources, and support the use of sudo, setuid, and setgid. Check out more information on the Ubuntu Linux Build Environment.

More details on our build environments are available in our CI Environment documentation.

Now that you’ve read the basics, head over to our Tutorial for details on setting up your first build!
