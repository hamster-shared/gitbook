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
