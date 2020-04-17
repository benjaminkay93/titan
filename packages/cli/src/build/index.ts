import { CliFunction } from '../common'
import { join } from 'path'
import { ensureDir, ensureFile } from 'fs-extra'
import createConfig from './webpack.app.config'
import compile from './compiler'

const calculateBuildTime = (millisecond: number): string => `${(Math.floor(millisecond) / 1000)}s`

const build = async ({ path }: CliFunction) => {
  const entryPath = join(__dirname, '..', '..', '..', 'pwa', 'src', 'entry.tsx')

  await Promise.all([ensureDir(APP_ROOT_PATH), ensureDir(APP_DIST_PATH), ensureFile(entryPath)])

  const config = createConfig({ mode: 'production', distPath: APP_DIST_PATH, entryPath })

  const start = Date.now()

  await compile(config)

  const end = Date.now()

  console.log('finish webpack', calculateBuildTime(end - start))
}

export default build
