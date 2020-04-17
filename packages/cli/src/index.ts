import build from './build'
import dev from './dev'
import start from './start'
import { join } from 'path'

const commands = {
  build,
  dev,
  start
}

const cli = ([, , arg3]: string[]) => {
  if (typeof process.env.PWD !== 'string') throw new Error('process.env.PWD has not been set.')
  const path = process.env.PWD

  global.APP_ROOT_PATH = path
  global.APP_DIST_PATH = join(path, 'dist')

  if (arg3 !== 'build' && arg3 !== 'dev' && arg3 !== 'start') throw new Error('Please provide an argument of \'build\', \'dev\' or \'start\'')

  commands[arg3]({ path })
}

export default cli
