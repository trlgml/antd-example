const { override, fixBabelImports, disableEsLint, addWebpackAlias, babelExclude } = require('customize-cra');
const path = require("path")

const custom = () => (config) => {
  // loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
  // const oldExclude = loaders[2].exclude
  // const newExclude = [oldExclude, /sdk.js/]
  // loaders[2].exclude = newExclude
  if (config.mode === 'production') {
    const plugin_MiniCssExtractPlugin = config.plugins.find((p) => p.constructor.name === 'MiniCssExtractPlugin');
    plugin_MiniCssExtractPlugin.options.ignoreOrder = true
  }
  return config
}

module.exports = override(
  // disableEsLint(),
  // babelExclude(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  custom(),
);