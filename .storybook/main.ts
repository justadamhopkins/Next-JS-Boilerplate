import { type StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-mcp'],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
};

export default config;
