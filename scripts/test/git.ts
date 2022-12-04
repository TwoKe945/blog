import { getLastCommit } from 'git-last-commit'

getLastCommit((err, commit) => {
  console.log(commit)
})
