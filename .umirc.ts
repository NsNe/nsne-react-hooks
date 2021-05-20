import { defineConfig } from "dumi";

const pkg = require('./package.json');

export default defineConfig({
  mode: 'site',
  title: 'nsne react hooks',
  dynamicImport: {},
  hash: true,
  outputPath: 'docs-dist',
  navs: [null, { title: 'GitHub', path: 'https://github.com/NsNe/nsne-react-hooks' }],
  publicPath: `/${pkg.name}/`,
  base: `/${pkg.name}/`,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ]

  // more config: https://d.umijs.org/config
});

