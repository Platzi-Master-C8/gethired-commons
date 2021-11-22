module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/tests.config.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@gethired/commons': '<rootDir>/packages/components',
    '@gethired/commons/*': '<rootDir>/packages/components/$1',
  },
  modulePathIgnorePatterns: ['dist'],
};
