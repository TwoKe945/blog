import { getLastCommit } from 'git-last-commit'

function getMessage(body: string) {
  const contents = body.split(":");
  if (contents.length >= 2) {
    return contents.slice(1).join("")
  } else {
    return contents
  }
}

getLastCommit((err, commit) => {
  const message = getMessage(commit.body)
  console.log(message)
  console.log(commit)
})
