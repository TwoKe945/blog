import { withTaskName, run } from './utils'
import { series } from 'gulp'
import { getLastCommit } from 'git-last-commit'

export default series(
  withTaskName('编译博客', () => run('pnpm docs:build')),
  withTaskName('暂存编译博客', () => run('git add .')),
  withTaskName('添加提交记录', () => {
    getLastCommit((err, commit) => {
      run(`git commit -m "deploy:${commit.body}"`)
    })
  }),
  withTaskName('更新远程仓库', () => run(`git push`)),
)
