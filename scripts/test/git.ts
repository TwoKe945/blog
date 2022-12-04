import { getLastCommit } from 'git-last-commit'

function getMessage(body: string) {
  const contents = body.split(":");
  if (contents.length >= 2) {
    return contents.slice(1).join("")
  } else {
    return contents[0]
  }
}

getLastCommit((err, commit) => {
  console.log(getMessage("xxxx"))
  console.log(commit)
})
