import webpack, { Configuration } from 'webpack'

import { promisify } from 'util'

const compile = async (config: Configuration) => {
  const compiler = webpack(config)
  const run = promisify(compiler.run.bind(compiler))
  const stats = await run()
  const info = stats.toJson()

  if (stats.hasErrors()) {
    info.errors.forEach(error => console.error(error))
  }

  if (stats.hasWarnings()) {
    info.warnings.forEach(warning => console.warn(warning))
  }

  if (stats.hasErrors() || stats.hasWarnings()) {
    process.exit(1)
  }
}

export default compile
