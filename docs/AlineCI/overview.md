---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Overview

You can learn how to use ALine CI in this document.

## Install and Deploy ALine CI

Aline is the core execution engine of hamster. It has a separate command line entry and can execute the hamster pipeline file in the local environment.

<Tabs>
  <TabItem value="linux" label="linux">

```shell
wget https://github.com/hamster-shared/a-line/releases/download/v0.2.0/aline-linux-amd64.tar.gz
tar -czvf aline-darwin-amd64.tar.gz
chmod +x aline
sudo mv aline /usr/local/bin/
```

  </TabItem>
  <TabItem value="macos" label="macos">

```shell
wget https://github.com/hamster-shared/a-line/releases/download/v0.2.0/aline-darwin-amd64.tar.gz
tar -czvf aline-darwin-amd64.tar.gz
chmod +x aline
sudo mv aline /usr/local/bin/
```

  </TabItem>
  <TabItem value="windows" label="windows">

Download [aline-darwin-amd64.tar.gz](https://github.com/hamster-shared/a-line/releases/download/v0.2.0/aline-windows-amd64.tar.gz) 
and decompress `aline-darwin-amd64.tar.gz`. Then launch  `aline.exe`

  </TabItem>
  <TabItem value="source" label="build from source">

Before you build ,you should install [golang 1.19](https://tip.golang.org/doc/install) and [node v16](https://nodejs.org/en/download/), you can get information from [this document](https://tip.golang.org/doc/install).

```shell
git clone -b v0.2.0 https://github.com/hamster-shared/a-line.git
cd a-line
make build
sudo mv aline /usr/local/bin/
```

  </TabItem>
</Tabs>

## Pipeline File

Pipeline file is a yaml file that defines how to pull, compile, and build code. We will provide a simple example to show you the basic format of ALine CI pipeline.

```yaml title="example.yml"
version: 1.0
name: example
stages:
  git-clone:
    steps:
      - name: git-clone
        uses: git-checkout
        with:
          url: https://github.com/mohaijiang/truffle-MetaCoin.git
          branch: main
          
  code-compile:
    needs:
      - git-clone
    steps:
      - name: code-compile
        uses: shell
        run: |
          npm install -g truffle
          truffle compile

```

## Execute 



```shell
ubuntu@ubuntu:/tmp$ /usr/local/bin/aline --file example.yml 
2023/01/13 06:53:09 job detail file not exist stat /home/ubuntu/pipelines/jobs/example/job-details: no such file or directory
2023-01-13 06:53:09 [INFO] [executor.go:138] stage: {
2023-01-13 06:53:09 [INFO] [executor.go:139]    // git-clone
2023-01-13 06:53:09 [INFO] [action_git.go:66] git stack: map[env:[NAME=example] hamsterRoot:/home/ubuntu/workdir id:0 name:example parameter:map[] workdir:/home/ubuntu/workdir/example]
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git rev-parse --is-inside-work-tree
fatal: not a git repository (or any of the parent directories): .git
2023-01-13 06:53:09 [ERRO] [action_git.go:227] shell command wait error: exit status 128
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
Initialized empty Git repository in /home/ubuntu/workdir/example/.git/
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git config remote.origin.url https://github.com/mohaijiang/truffle-MetaCoin.git
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git config remote.origin.url https://github.com/mohaijiang/truffle-MetaCoin.git
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git fetch --tags --progress https://github.com/mohaijiang/truffle-MetaCoin.git +refs/heads/*:refs/remotes/origin/*
remote: Enumerating objects: 28, done.        
remote: Counting objects: 100% (28/28), done.        
remote: Compressing objects: 100% (19/19), done.        
remote: Total 28 (delta 6), reused 27 (delta 5), pack-reused 0        
From https://github.com/mohaijiang/truffle-MetaCoin
 * [new branch]      main       -> origin/main
2023-01-13 06:53:09 [DEBU] [action_git.go:244] execute git clone command: git rev-parse refs/remotes/origin/main^{commit}
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git config core.sparsecheckout
2023-01-13 06:53:09 [ERRO] [action_git.go:227] shell command wait error: exit status 1
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git checkout -f 1343ff6d436d6b29cfe8d62a2a8345f29b891177
Note: switching to '1343ff6d436d6b29cfe8d62a2a8345f29b891177'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 1343ff6 init
2023-01-13 06:53:09 [DEBU] [action_git.go:244] execute git clone command: git branch -a -v --no-abbrev
2023-01-13 06:53:09 [DEBU] [action_git.go:168] execute git clone command: git checkout -b main 1343ff6d436d6b29cfe8d62a2a8345f29b891177
Switched to a new branch 'main'
2023-01-13 06:53:09 [INFO] [executor.go:210] }
2023-01-13 06:53:09 [INFO] [executor.go:138] stage: {
2023-01-13 06:53:09 [INFO] [executor.go:139]    // code-compile
2023-01-13 06:53:09 [INFO] [action_shell.go:73] shell stack: map[env:[NAME=example] hamsterRoot:/home/ubuntu/workdir id:0 name:example parameter:map[] workdir:/home/ubuntu/workdir/example]
2023-01-13 06:53:09 [DEBU] [action_shell.go:90] execute shell command: sh -c /home/ubuntu/workdir/example_tmp/XVlBzgbaiC.sh
+ npm install -g truffle
npm WARN deprecated mkdirp-promise@5.0.1: This package is broken and no longer maintained. 'mkdirp' itself supports promises now, please switch to that.
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated apollo-datasource@3.3.2: The `apollo-datasource` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm WARN deprecated apollo-server-plugin-base@3.7.1: The `apollo-server-plugin-base` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm WARN deprecated apollo-server-types@3.7.1: The `apollo-server-types` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm WARN deprecated apollo-server-errors@3.3.1: The `apollo-server-errors` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm WARN deprecated apollo-server@3.11.1: The `apollo-server` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm WARN deprecated apollo-server-express@3.11.1: The `apollo-server-express` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm WARN deprecated uuid@2.0.1: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated multicodec@1.0.4: This module has been superseded by the multiformats module
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated apollo-server-env@4.2.1: The `apollo-server-env` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/utils.fetcher` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated multibase@0.6.1: This module has been superseded by the multiformats module
npm WARN deprecated multibase@0.7.0: This module has been superseded by the multiformats module
npm WARN deprecated apollo-reporting-protobuf@3.3.3: The `apollo-reporting-protobuf` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/usage-reporting-protobuf` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm WARN deprecated multicodec@0.5.7: This module has been superseded by the multiformats module
npm WARN deprecated cids@0.7.5: This module has been superseded by the multiformats module
npm WARN deprecated apollo-server-core@3.11.1: The `apollo-server-core` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.

changed 759 packages, and audited 788 packages in 40s

89 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
+ truffle compile

Compiling your contracts...
===========================
- Fetching solc version list from solc-bin. Attempt #1
- Fetching solc version list from solc-bin. Attempt #1
- Downloading compiler. Attempt #1.
- Fetching solc version list from solc-bin. Attempt #1
- Downloading compiler. Attempt #1.
> Compiling ./contracts/ConvertLib.sol
> Compiling ./contracts/MetaCoin.sol
> Artifacts written to /home/ubuntu/workdir/example/build/contracts
> Compiled successfully using:
   - solc: 0.8.13+commit.abaa5c0e.Emscripten.clang
2023-01-13 06:54:07 [INFO] [action_shell.go:153] execute shell command success
2023-01-13 06:54:07 [INFO] [executor.go:210] }
2023-01-13 06:54:07 [TRAC] [output.go:118] output done, flush all, close file
```
