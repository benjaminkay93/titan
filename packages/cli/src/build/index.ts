import { CliFunction } from '../common'

const build = ({ path }: CliFunction) => {
  console.log(path)
  console.log(APP_ROOT_PATH)
}

export default build
