import { defineConfig } from 'vitest/config';
import path from 'path';

const testConfig = defineConfig({
  resolve: {
    alias: [
      { find: '@atoms', replacement: path.resolve(__dirname, './src/_atoms') },
      {
        find: '@molecules',
        replacement: path.resolve(__dirname, './src/_molecules'),
      },
      {
        find: '@organisms',
        replacement: path.resolve(__dirname, './src/_organisms'),
      },
      { find: '@core', replacement: path.resolve(__dirname, './src/_core') },
      {
        find: '@templates',
        replacement: path.resolve(__dirname, './src/_templates'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/_hooks') },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, './src/_styles'),
      },
      { find: '@core', replacement: path.resolve(__dirname, './src/_core') },
      {
        find: '@helpers',
        replacement: path.resolve(__dirname, './src/helpers'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, './src/constants'),
      },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@typings', replacement: path.resolve(__dirname, './src/types') },
    ],
  },
  test: {
    globals: true,
    clearMocks: true,
    include: ['**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./configs/vitest/setupTests.ts'],
    coverage: {
      provider: 'istanbul',
      enabled: true,
      reportsDirectory: 'testCoverage',
      reporter: ['json', 'text', 'lcov', 'clover'],
      include: [
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
        '!scripts/**/*',
      ],
      exclude: ['/node_modules/', './configs/vitest/setupTests.ts'],
    },
  },
});

export default testConfig;
