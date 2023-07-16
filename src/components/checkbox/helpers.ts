import { cva } from 'class-variance-authority';

export const checkBoxStyles = cva('group-hover:cursor-pointer', {
  variants: {
    intent: {
      default: 'text-gray-600 focus:ring-gray-600 focus:border-gray-600',
      success: 'text-green-500 focus:ring-green-500 focus:border-green-500',
      info: 'text-indigo-500 focus:ring-indigo-500 focus:border-indigo-500',
      warning: 'text-yellow-500 focus:ring-yellow-500 focus:border-yellow-500',
      danger: 'text-red-500 focus:ring-red-500 focus:border-red-500',
      error: 'text-red-600 focus:ring-red-600 focus:border-red-600',
    },
    inputSize: {
      default: 'w-4 h-4',
      sm: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
      xxl: 'w-10 h-10',
      massive: 'w-12 h-12',
    },
    rounded: {
      default: 'rounded',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      xxl: 'rounded-2xl',
      none: 'rounded-none',
      full: 'rounded-full',
    },
  },
  compoundVariants: [{}],
  defaultVariants: {
    inputSize: null,
    rounded: null,
    intent: null,
  },
});
