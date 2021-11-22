const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '@gethired/commons': path.resolve(__dirname, './packages/components/src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
  },
};