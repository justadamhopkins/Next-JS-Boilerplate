import path from 'path';

import { defineConfig } from 'vitest/config';

const testConfig = defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    include: ['**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./configs/vitest/setupTests.ts'],
    alias: {
      '@atoms/*': path.resolve(__dirname, 'src/components/_atoms'),
      '@molecules/*': path.resolve(__dirname, 'src/components/_molecules/*'),
      '@organisms/*': path.resolve(__dirname, 'src/components/_organisms'),
      '@core/*': path.resolve(__dirname, 'src/components/_core'),
      '@templates/*': path.resolve(__dirname, 'src/components/_templates'),
      '@hooks/*': path.resolve(__dirname, 'src/components/_hooks'),
      '@styles/*': path.resolve(__dirname, 'src/styles'),
      '@common/*': path.resolve(__dirname, 'src/shared'),
      '@typings/*': path.resolve(__dirname, 'src/types'),
      'test-utils/*': path.resolve(__dirname, 'src/utils/tests'),
    },
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
