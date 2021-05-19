const pkg = require('./package.json');

export default {
  mode: 'site',
  title: 'nsne react hooks',
  dynamicImport: {},
  hash: true,
  outputPath: 'docs-dist',
  navs: [null, { title: 'GitHub', path: 'https://github.com/NsNe/nsne-react-hooks' }],
  publicPath: `/${pkg.name}/`,
  base: `/${pkg.name}/`,
    // more config: https://d.umijs.org/config
};
