---
sidebar_position: 2
---

# Pipeline Syntax

Learn how to write a pipeline based on this case.

## Follow Example



```yaml
version: 1.0                  # pipeline file version. now is 1.0
name: example                 # pipeline name
stages:                       # define pipeline stages
  git-clone:                  # stage name
    steps:                    # define steps in stage
      - name: git-clone       # step name. You can define multiple step in stages.
        uses: git-checkout    # step action
        with:                 # step action arguments
          url: https://github.com/mohaijiang/truffle-MetaCoin.git # here use git-checkout action, this action requires two argument what is url and branch 
          branch: main        # git-checkout action arguments:  branch . Different action needs different argument.
          
  code-compile:               # stage name
    needs:                    # stage dependency
      - git-clone             # The necessary stage before the implementation of this stage
    steps:                    # define steps in stage
      - name: code-compile    # step name. You can define multiple step in stages.
        runs-on: node:16      # runs-on： define run environment in step
        uses: shell           # use: use action. This is example is shell action. You can learn more about actions in the following chapters.
        run: |                # run: shell action execute command definition. You can write command in one line or use `|` symbol to write with multi lines
          npm install -g truffle    
          truffle compile

```
