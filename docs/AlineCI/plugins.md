---
sidebar_position: 3
---

# ALine CI Action Plugins

Introduce some plugins of ALine CI.

ALine CI provides some built-in plugins. You can use these action plugin to build your own pipeline.

## Plugins 


### git 

git action is used to clone repository . 

- name: git-checkout
- with:
  - url:  git repository url
  - branch:  the branch or tag that want to checkout 
- example:
 ```yaml
      - name: <some-name>
        uses: git-checkout
        with:
          url: https://github.com/mohaijiang/truffle-MetaCoin.git
          branch: main
 ```
         
### workdir

workdir action can set pipeline workdir and then the following commands can be run in this directory.
                                                                                     
- name: workdir
- with:
  - workdir: the directory path. 
- example:
 ```yaml
      - name: <some-name>
        uses: workdir
        with:
          workdir: /Users/ubuntu/workspace/aline
 ```

### shell

shell action is the most basic action, you can write shell script to build 、compile or do anything .

- name: shell
- run: the shell script you want to execute
- runs-on: docker image name, provider docker environment that shell command need
- example:
```yaml
      - name: <some-name>
        run: |
          echo "hello"
          node -v
```

### hamster-artifactory

hamster-artifactory action can compress and store build achievement , that you can get the achievement without workspaces status.

- name: hamster-artifactory
- with: 
  - name: the achievement name that compressed.
  - compress: (optional) default is ture. if true ,the action will compress the files that defined in path arguments. 
if false ,will not compress and directory store.
  - path: the target that you want to archive . the path argument can receive wildcard path.
- example:
```yaml
      - name: save artifactory
        uses: hamster-artifactory
        with:
          name: some.zip
          compress: true
          path: |
            target/*.jar
            target/maven-status
            target/*/*/*/*/*.lst
            src/*/java
```


### remote action

In order to enhance the extensibility of pipeline, we allow users to define their own action plug-ins to enhance the function of pipeline.
You can get an example from [here](https://github.com/mohaijiang/hello-world-action.git). It is very similar to the Github Action.

remote action needs an `action.yml`, that defines how to do and what to do. It is a yaml format file. Let's show the syntax .


```yaml title='hello-world-action/action.yml'
name: 'simple hello world'
description: 'Executing shell commands'
author: 'mohaijiang'
inputs:
  name:
    description: 'world'
    default: 'world'
    required: false
runs:
  using: 'composite'
  steps:
    - run: hello.sh
      shell: bash
    - run: echo WORLD
      shell: bash
```

```shell title='hello-world-action/hello.sh'
echo "hello"
```

Now we can use this action, Here is pipeline file example.

```yaml title='remote-action-pipeline.yml'
version: 1.0
name: remote-action
stages:
  remote-action:
    steps:
      - name: remote hello world action
        uses: mohaijiang/hello-world-action           # github repository   <namespace>/<repositoryName>
        with:                                         # your action args
          name: aline                                 # this the argument defined in action.yml

```

Now you can execute this pipeline file and get result like this.

```shell
aline --file remote-action-pipeline.yml

2023-01-16 10:59:41 [INFO] [executor.go:138] stage: {
2023-01-16 10:59:41 [INFO] [executor.go:139]    // remote-action
....
....

hello

aline

...
...

```
