import webpack, { Configuration } from 'webpack'
import { join } from 'path'

const createConfig = ({
  mode = 'production',
  entryPath,
  distPath
}: {mode: 'production'
  entryPath: string
  distPath: string}): Configuration => {
  const prod = mode === 'production'
  const dev = !prod

  return {
    mode,
    context: APP_ROOT_PATH,
    entry: {
      pwa: [
        entryPath
      ]
    },
    output: {
      filename: 'bundle.js',
      path: distPath,
      publicPath: `${distPath}/`
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        BROWSER: prod
      }),
      new webpack.DefinePlugin({
        APP_DIST_PATH: JSON.stringify(distPath),
        APP_ROOT_PATH: JSON.stringify(APP_ROOT_PATH),
      }),
    ],
    resolve: {
      mainFields: ['module', 'browser', 'main'],
      extensions: ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: require(join(__dirname, '..', '..', '..', '..', 'babel.config.js'))
          }
        }
      ]
    }
  }
}

export default createConfig
