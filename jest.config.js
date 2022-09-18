const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  bail: 10,
  coverageDirectory: 'testCoverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,}',
    'server/**/*.{ts,}',
    '!**/stories.{tsx,}',
    '!**/*.stories.{tsx,}',
    '!**/*.d.{ts,}',
    '!**/test.{ts,tsx,}',
    '!**/spec.{ts,tsx,}',
    '!**/*.test.{ts,tsx,}',
    '!**/*.spec.{ts,tsx,}',
    '!src/**/__test__/**/*',
    '!src/**/__test__/*',
    '!src/**/__tests__/**/*',
    '!src/**/__tests__/*',
    '!src/**/__mock__/**/*',
    '!src/**/__mock__/*',
    '!src/**/__mocks__/*',
    '!src/**/__mocks__/**/*',
    '!server/**/__test__/**/*',
    '!server/**/__test__/*',
    '!server/**/__tests__/**/*',
    '!server/**/__tests__/*',
    '!server/**/__mock__/**/*',
    '!server/**/__mock__/*',
    '!server/**/__mocks__/*',
    '!server/**/__mocks__/**/*',
    '!scripts/**/*',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsconfig: '<rootDir>/tsconfig.test.json',
      astTransformers: {
        before: [
          {
            path: '@formatjs/ts-transformer/ts-jest-integration',
            options: {
              // options
              overrideIdFn: '[sha512:contenthash:base64:6]',
              ast: true,
            },
          },
        ],
      },
    },
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``,
  },
  maxWorkers: '1',
  moduleDirectories: ['node_modules', '<rootDir>/src/utils/tests'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'd.ts', 'tsx', 'node'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src',
  }),
  clearMocks: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/configs/jest/jest.setup.ts'],
  setupFilesAfterEnv: [
    '<rootDir>/configs/jest/setup.postenv.ts',
    '<rootDir>/configs/jest/loader-shim.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.postenv.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.ts?(x)$': 'ts-jest',
    '^.+\\.tsx?$': '<rootDir>/config/jest/preprocess.js',
    '^.+\\.json$': '<rootDir>/config/jest/json-transform.js',
    '^(?!.*\\.(png|jpe?g|gif|svg)$)':
      '<rootDir>/config/jest/image-transform.js',
    '^(?!.*\\.(js|jsx|mjs)$)': '<rootDir>/config/jest/file-transform.js',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
