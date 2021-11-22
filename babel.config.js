module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], 'minify'],
  plugins: ['@babel/plugin-transform-runtime'],
};
