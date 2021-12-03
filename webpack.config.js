const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '@gethired/commons': path.resolve(__dirname, './packages/components/src'),
      '@master-c8/theme': path.resolve(__dirname, './packages/theme/src'),
      '@master-c8/icons': path.resolve(__dirname, './packages/icons/src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
  },
};