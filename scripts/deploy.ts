import { withTaskName, run } from './utils'
import { series } from 'gulp'
import { getLastCommit } from 'git-last-commit'

function getMessage(body: string) {
  const contents = body.split(":");
  if (contents.length >= 2) {
    return contents.slice(1).join("")
  } else {
    return contents[0]
  }
}

export default series(
  withTaskName('编译博客', () => run('pnpm docs:build')),
  withTaskName('暂存编译博客', () => run('git add .')),
  withTaskName('添加提交记录', async () => {
    await new Promise((resolve) => {
      getLastCommit(async (err, commit) => {
        await run(`git commit --amend -m "deploy:${getMessage(commit.subject)}"`)
        resolve(null)
      })
    })
  })
)
/**
 * 
在开发社区里，有许多关于 merge 与 rebase 的讨论。以下是关于 rebase 的优缺点：

优点:

Rebase 使你的提交树变得很干净, 所有的提交都在一条线上
缺点:

Rebase 修改了提交树的历史
比如, 提交 C1 可以被 rebase 到 C3 之后。这看起来 C1 中的工作是在 C3 之后进行的，但实际上是在 C3 之前。

一些开发人员喜欢保留提交历史，因此更偏爱 merge。而其他人（比如我自己）可能更喜欢干净的提交树，于是偏爱 rebase。仁者见仁，智者见智。
 */
