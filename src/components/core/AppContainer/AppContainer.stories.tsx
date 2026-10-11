import { AppContainer } from '@core/AppContainer';
import { type Meta, type StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Core/AppContainer',
  component: AppContainer,
  args: {
    children: <p>Page content</p>,
  },
} satisfies Meta<typeof AppContainer>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = {};
