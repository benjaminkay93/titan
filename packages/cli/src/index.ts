import build from './build'
import dev from './dev'
import start from './start'

const commands = {
  build,
  dev,
  start
}

const cli = ([arg1]: string[]) => {
  if (arg1 !== 'build' && arg1 !== 'dev' && arg1 !== 'start') throw new Error('Please provide an argument of \'build\', \'dev\' or \'start\'')

  console.log('Valid argument')
  commands[arg1]()
}

export default cli
