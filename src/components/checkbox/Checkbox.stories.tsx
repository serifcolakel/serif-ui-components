import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Checkbox',
    inputSize: 'massive',
  },
};

export const Large: Story = {
  args: {
    label: 'Checkbox',
    inputSize: 'lg',
    rounded: 'sm',
  },
};

export const Small: Story = {
  args: {
    label: 'Checkbox',
    rounded: 'sm',
    onClick: () => {
      window.console.log('Checkbox clicked!');
    },
  },
};
