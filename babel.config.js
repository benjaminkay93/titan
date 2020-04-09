const presets = [
  '@babel/preset-typescript',
  '@babel/preset-react',
]

const plugins = []

const env = {
  test: {
    presets: [
      [
        { env: { modules: 'commonjs' } }
      ]
    ]
  }
}

module.exports = {
  presets,
  plugins,
  env
}
