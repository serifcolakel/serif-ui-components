import { cva } from 'class-variance-authority';

/**
 * Button styles for the Button component.
 */
export const buttonStyles = cva(
  'flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center',
  {
    variants: {
      buttonType: {
        primary:
          'bg-violet-500 text-white border-violet-500 hover:bg-violet-600',
        secondary:
          'bg-gray-200 text-gray-600 border-gray-200 hover:bg-gray-300',
        warning:
          'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600',
        outline:
          'bg-white text-gray-600 hover:bg-gray-100 border hover:border-gray-100 border-gray-300 hover:shadow-md',
        disabled: 'bg-black text-white border-black cursor-not-allowed',
        error: 'bg-red-500 text-white border-red-500 hover:bg-red-600',
      },
      size: {
        default: ['text-base'],
        small: ['text-sm'],
        large: ['text-lg'],
        xxl: ['text-2xl'],
      },
      spacing: {
        default: ['py-2', 'px-4'],
        small: ['py-1', 'px-2'],
        large: ['py-3', 'px-6'],
        xxl: ['py-4', 'px-8'],
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        xxl: 'rounded-2xl',
        none: 'rounded-none',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        buttonType: 'primary',
        size: 'default',
        spacing: 'default',
        rounded: 'default',
      },
    ],
    defaultVariants: {
      buttonType: 'primary',
      size: 'default',
      rounded: 'default',
      spacing: 'default',
    },
  }
);
