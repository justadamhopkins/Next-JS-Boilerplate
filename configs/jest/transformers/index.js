module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``,
  },
  bail: 10,
  coverageDirectory: 'testCoverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary', 'html'],
  collectCoverageFrom: [
    'src/**/*.{tsx}',
    'src/**/*.{ts}',
    '!**/test.{tsx}',
    '!**/test.{ts}',
    '!**/*.d.ts',
    '!**/stories.{tsx}',
    '!**/__mock__/*',
    '!**/*mock*.ts',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        addFileAttribute: 'true',
        outputDirectory: 'reports/junit/js-test-results',
      },
    ],
    [
      'jest-sonar',
      {
        outputDirectory: 'reports',
        outputName: 'test-reporter.xml',
      },
    ],
  ],
  maxWorkers: '1',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transformIgnorePatterns: ['/node_modules/'],
};
