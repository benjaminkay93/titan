import { CliFunction } from '../common'

const dev = ({ distPath }: CliFunction) => {
  console.log(`Running dev from ${distPath}`)
}

export default dev
