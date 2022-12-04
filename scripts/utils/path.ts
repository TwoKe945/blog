import { fileURLToPath } from 'url'
import { dirname } from 'path'

export function path(url: string) {
  const __filename = fileURLToPath(url)
  const __dirname = dirname(__filename)
  return {
    __filename,
    __dirname
  }
}
