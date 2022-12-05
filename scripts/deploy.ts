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
        await run(`git commit -m "deploy:${getMessage(commit.subject)}"`)
        await run(`git commit --amend -m "deploy:${getMessage(commit.subject)}"`)
        resolve(null)
      })
    })
  })
)
