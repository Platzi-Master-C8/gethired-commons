module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/tests.config.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@master-c8/commons': '<rootDir>/packages/components',
    '@master-c8/commons/*': '<rootDir>/packages/components/$1',
    '@master-c8/icons': '<rootDir>/packages/icons',
    '@master-c8/icons/*': '<rootDir>/packages/icons/$1',
  },
  modulePathIgnorePatterns: ['dist'],
};
