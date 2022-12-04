import { fileURLToPath } from 'url'
import { dirname, join} from 'path'

export function path(url: string) {
  const __filename = fileURLToPath(url)
  const __dirname = dirname(__filename)
  return {
    __filename,
    __dirname
  }
}

const { __dirname } = path(import.meta.url)
export const rootPath = join(__dirname, '../../')
