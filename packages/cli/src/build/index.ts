import { CliFunction } from '../common'
import { join } from 'path'
import { ensureDir, ensureFile } from 'fs-extra'
import createConfig from './webpack.app.config'
import compile from './compiler'

const build = async ({ path }: CliFunction) => {
  const entryPath = join(__dirname, '..', '..', '..', 'pwa', 'src', 'entry.tsx')

  await Promise.all([ensureDir(APP_ROOT_PATH), ensureDir(APP_DIST_PATH), ensureFile(entryPath)])

  const config = createConfig({ distPath: APP_DIST_PATH, entryPath })

  console.log('starting webpack')

  await compile(config)

  console.log('finish webpack')
}

export default build
