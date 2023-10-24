---
title: 'Get Started'
---


<!-- ---
title: 'Get Started'
slug: '/'
hidden: false
sidebar_position: 0
hide_table_of_contents: true
--- -->

## Get Started With Hamster

Hamster is an all-in-one tool and middleware service platform for Web3.0 developers. 

We are committed to helping more developers enter the Web3.0 field, quickly master this rapidly changing technical field, adapt to its high-speed development and ultimately achieve success.

Currently, the services provided by Hamster mainly cover two series: code series and middleware.
- The code series is mainly targeted at developers. It covers: Template Marketplace, Automated workflow and Operation and Maintenance Tools.
- The middleware is mainly targeted at enterprises and project teams. It includes: Storage Service, RPC Service, Oracle Service and more.

To find more, please refer to our social media

- Web:<https://hamsternet.io/>
- Medium:<https://hamsternet.medium.com/>
- Twitter:<https://twitter.com/Hamsternetio>
- Telegram:<https://t.me/hamsternetio>
- Discord:<https://discord.gg/MrJWxRwXpb>
- Youtube:<https://www.youtube.com/@hamsternet_io>

## Core Concepts for DevOps

#### What Is Continuous Integration (CI)? 

Continuous Integration is the practice of merging in small code changes frequently - rather than merging in a large change at the end of a development cycle. The goal is to build healthier software by developing and testing in smaller increments. This is where Hamster CI comes in.

As a continuous integration platform, Hamster CI supports your development process by automatically building and testing code changes, providing immediate feedback on the success of the change. Hamster CI can also automate other parts of your development process by managing deployments and notifications.

#### CI Builds and Automation: Building, Testing, Deploying

When you run a build, Hamster CI clones your GitHub repository into a brand-new virtual environment, and carries out a series of tasks to build and test your code. If one or more of those tasks fail, the build is considered broken. If none of the tasks fail, the build is considered passed and Travis CI can deploy your code to a web server or application host.

CI builds can also automate other parts of your delivery workflow. This means you can have jobs depend on each other with Build Stages, set up notifications, prepare deployments after builds and many other tasks.

#### Action, Step, Stage and Job

In the Hamster CI documentation, some common words have specific meanings:

* action - the smallest unit to perform tasks. Hamster provides several actions to meet basic requirements. Compare the main actions, such as shell action, git action, remote action, etc

* step - the sequential action of a step.

* stage - a group of step that run in parallel as part of a sequential build process composed of multiple stages.

* job - an automated process that clones your repository into a virtual environment and then carries out a series of phases such as compiling your code, running tests, etc. A job fails, if the return code of the script phase is non-zero. A job is a set of steps that execute a series of commands, using the specified runner.

#### What is Continuous Delivery (CD) ?

Continuous delivery usually means a developer’s changes to an application are automatically bug tested and uploaded to a repository (like GitHub or a container registry), where they can then be deployed to a live production environment by the operations team. It’s an answer to the problem of poor visibility and communication between dev and business teams. To that end, the purpose of continuous delivery is to ensure that it takes minimal effort to deploy new code.

Continuous deployment (the other possible "CD") can refer to automatically releasing a developer’s changes from the repository to production, where it is usable by customers. It addresses the problem of overloading operations teams with manual processes that slow down app delivery. It builds on the benefits of continuous delivery by automating the next stage in the pipeline.

#### Infrastructure and Environment Notes

Hamster CI plans to offer a few different infrastructure environments, so you can select the setup that suits your project best. Now Ubuntu Linux is available, macOS and Windows will come soon.

* Ubuntu Linux - these Linux Ubuntu environments run inside full virtual machines, provide plenty of computational resources, and support the use of sudo, setuid, and setgid. Check out more information on the Ubuntu Linux Build Environment.

More details on our build environments are available in our CI Environment documentation.

Now that you’ve read the basics, head over to our Tutorial for details on setting up your first build!

## Video Tutorial

To quickly learn how to use Hamster, watch these instructional videos as needed. They will help you get started with Hamster

### Hamster Manual - EVM
<iframe width="560" height="315" src="https://www.youtube.com/embed/eNNZvikmfgo?si=yRlSxt4-msnNOGfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Hamster Manual - Sui
<iframe width="560" height="315" src="https://www.youtube.com/embed/JFhd558xfgU?si=WOzle1dp0EDHclOt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Hamster Manual - StarkNet
<iframe width="560" height="315" src="https://www.youtube.com/embed/fAO8nsyjP0c?si=ECrSma31-8zyKLw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### Hamster Manual - IC
<iframe width="560" height="315" src="https://www.youtube.com/embed/dSLPTZWyiBY?si=S2UR7FwG0QQSS9ky" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### Hamster Manual - Polkadot
<iframe width="560" height="315" src="https://www.youtube.com/embed/3gwgD7B3HtY?si=09Nl5FXvTU8KY37w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Sign up

To sign up for Hamster, go to https://develop.alpha.hamsternet.io/login. You can choose to authenticate either with a Git provider. Connecting to a Git provider is an important part of the Hamster journey. This is because every time you create a project by Hamster, we will generate a project framework for you and synchronize the code repository under your GitHub account 

## Up Next

Continue getting started on Hamster:

import ProjectFeatures from '@site/src/components/ProjectFeatures';

<ProjectFeatures/>

