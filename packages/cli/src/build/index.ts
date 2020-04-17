import { CliFunction } from '../common'
import { join } from 'path'

const build = ({ path }: CliFunction) => {
  console.log(path)
  console.log(APP_ROOT_PATH)
  console.log(join(__dirname, '..', '..', '..'))
}

export default build
