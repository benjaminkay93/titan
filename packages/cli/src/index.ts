import build from './build'
import dev from './dev'
import start from './start'

const commands = {
  build,
  dev,
  start
}

const cli = ([, , arg3]: string[]) => {
  const distPath = `${process.env.PWD}/dist`

  if (arg3 !== 'build' && arg3 !== 'dev' && arg3 !== 'start') throw new Error('Please provide an argument of \'build\', \'dev\' or \'start\'')

  commands[arg3]({ distPath })
}

export default cli
