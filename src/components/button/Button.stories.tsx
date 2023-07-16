import type { Meta, StoryObj } from '@storybook/react';
import {
  FaBeer,
  Fa500Px,
  FaAccessibleIcon,
  FaAccusoft,
  FaAcquisitionsIncorporated,
  FaAd,
  FaAddressCard,
} from 'react-icons/fa';
import Button from './Button';

const buttonIcons: Record<string, React.ReactNode> = {
  faBeer: <FaBeer />,
  fa500Px: <Fa500Px />,
  faAccessibleIcon: <FaAccessibleIcon />,
  faAccusoft: <FaAccusoft />,
  faAcquisitionsIncorporated: <FaAcquisitionsIncorporated />,
  faAd: <FaAd />,
  faAddressCard: <FaAddressCard />,
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    leftIcon: {
      description: 'The button left icon (optional)',
      options: Object.keys(buttonIcons),
      mapping: buttonIcons,
    },
    rightIcon: {
      description: 'The button right icon (optional)',
      options: Object.keys(buttonIcons),
      mapping: buttonIcons,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    buttonType: 'secondary',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};
