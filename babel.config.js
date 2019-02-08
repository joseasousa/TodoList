module.exports = function (api) {
  api.cache(true);
  const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          test: './test',
          underscore: 'lodash',
        },
      },
    ]];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
