const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current'
      }
    }
  ],
  '@babel/preset-typescript',
  '@babel/preset-react',
]

const plugins = []

module.exports = {
  presets,
  plugins
}
