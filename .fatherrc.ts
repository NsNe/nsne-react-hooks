export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};
