const reanimatedPlugin = require('react-native-reanimated/plugin');

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [reanimatedPlugin],
  };
};