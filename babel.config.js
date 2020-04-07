const presets = []

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
