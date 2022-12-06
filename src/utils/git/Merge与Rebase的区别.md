---
# 当前页面内容标题
title: Merge与Rebase的区别
# 分类
category:
  - 工作流
# 标签
tag:
  - 工作流
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

# Merge与Rebase的区别

## 主分支与特性分支状态


```sh
$ git lg
* f9f6133 - (HEAD -> feat/navbar) F2 - add F2 (7 seconds ago) <TwoKe>
* 1ebd70f - F1 - create navbar file (4 minutes ago) <TwoKe>
| * f6c3ec2 - (master) M3 - add M3 (2 minutes ago) <TwoKe>
|/
* f877764 - M2 - add M2 (5 minutes ago) <TwoKe>
* d759c6d - M1 - create index file (6 minutes ago) <TwoKe>
```

## Merge合并分支

```sh
$ git merge feat/navbar
$ git lg
*   f3ec0fd - (HEAD -> master) Merge branch 'feat/navbar' (5 seconds ago) <TwoKe>
|\
| * f9f6133 - (feat/navbar) F2 - add F2 (2 minutes ago) <TwoKe>
| * 1ebd70f - F1 - create navbar file (6 minutes ago) <TwoKe>
* | f6c3ec2 - M3 - add M3 (4 minutes ago) <TwoKe>
|/
* f877764 - M2 - add M2 (7 minutes ago) <TwoKe>
* d759c6d - M1 - create index file (8 minutes ago) <TwoKe>
```

使用 ```git merge``` 合并分支，历史提交记录不会被更改，合并时会创建一个新的提交记录（ Merge branch 'feat/navbar'），当存在多个参与者合并分支时，会导致分支图比较混乱，分支图非线性。

## Rebase合并分支

```sh
-> feat/navbar
$ git rebase master
$ git lg
* c2a9240 - (HEAD -> feat/navbar) F2 - add F2 (4 seconds ago) <TwoKe>
* ad5099f - F1 - create navbar file (4 seconds ago) <TwoKe>
* f6c3ec2 - (master) M3 - add M3 (10 minutes ago) <TwoKe>
* f877764 - M2 - add M2 (14 minutes ago) <TwoKe>
* d759c6d - M1 - create index file (15 minutes ago) <TwoKe>
-> feat/navbar
$ git switch master
Switched to branch 'master'
-> master
$ git rebase feat/navbar
Successfully rebased and updated refs/heads/master.
$ git lg
* c2a9240 - (HEAD -> master, feat/navbar) F2 - add F2 (40 seconds ago) <TwoKe>
* ad5099f - F1 - create navbar file (40 seconds ago) <TwoKe>
* f6c3ec2 - M3 - add M3 (11 minutes ago) <TwoKe>
* f877764 - M2 - add M2 (14 minutes ago) <TwoKe>
* d759c6d - M1 - create index file (15 minutes ago) <TwoKe>
```

使用 ```git rebase``` 合并分支，历史提交记录会被更改，特新分支会变基。本身是基于M2的特新分支（feat/navbar），合并分支后，改为基于master最新提交的M3为基，且提交记录也会发生改变（hash值发生变更）。如果在共享分支中使用rebase，其他人可能会因为变基问题，导致代码拉取失败。

[git lg - 别名设置](./Git常用指令.html#其他)
