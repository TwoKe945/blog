import { withTaskName, run } from './utils'
import { series } from 'gulp'
import { getLastCommit } from 'git-last-commit'


function getMessage(body: string) {
  const contents = body.split(":");
  if (contents.length >= 2) {
    return contents.slice(1).join("")
  } else {
    return contents
  }
}

export default series(
  withTaskName('编译博客', () => run('pnpm docs:build')),
  withTaskName('暂存编译博客', () => run('git add .')),
  withTaskName('添加提交记录', () => {
    getLastCommit((err, commit) => {
      const message = getMessage(commit.body)
      run(`git commit -m "deploy: ${message}"`)
    })
  }),
  withTaskName('更新远程仓库', () => {
    getLastCommit((err, commit) => {
      const message = getMessage(commit.body)
      run(`git push`)
    })
  }),
)
