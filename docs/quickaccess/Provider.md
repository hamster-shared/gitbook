---
sidebar_position: 2
---

# Providers

Before installing any client, make sure your computer has enough resources to run it. The minimum and recommended requirements are as follows :

### Docker Deployment

We recommend using Docker for deployment, which is easier and faster than source deployment.

Please make sure to install Docker and docker-compose before deploying.

### Operating the Node

You should regularly monitor your node to make sure it's running properly. You may need to do occasional maintenance.

### Keeping Node Online

Your node doesn't have to be online nonstop, but you should keep it online as much as possible to keep it in sync with the network. You can shut it down to restart it, but keep in mind that :

- Shutting down can take up to a few minutes if the recent state is still being written on disk.
- Forced shut downs can damage the database.
- Your client will go out of sync with the network and will need to resync when you restart it. This takes depending on how long it has been offline.

This doesn't apply on consensus layer validator nodes. Taking your node offline will affect all services dependent on it. If you are running a node for _staking_ purposes you should try to minimize downtime as much as possible.

### Recommended Specifications

|     | Minimum Specs | Recommended Specs |
| :-: | :-----------: | :---------------: |
| CPU |    8 vcore    |     16 vcore      |
| RAM |     16 GB     |       32GB        |

---

## Log in to the official website of hamster and download Hamster-Provider

Before you download the hamster provider client, you need to enter the offial website of hamster ( https://hamsternet.io/ ). Click download on the banner of the official website of hamster to enter the download interface.

## After downloading, install the Hamster-Provider

As shown in the figure, enter the provider interface and select the link address.

![img](/img/pages/u3048.png)

## Adding Web Joints

Click Add to add gateway, and click Update basic information

![img](/img/pages/u3049.png)

## Open Enjoy Service

Click to open Shared services

![img](/img/pages/u3050.png)
