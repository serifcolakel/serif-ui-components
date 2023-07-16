import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges classes using clsx and tailwind-merge
 * @example
 * clsxMerge('text-red-500', 'text-2xl', 'font-bold', 'text-center')
 * // => 'text-red-500 text-2xl font-bold text-center'
 * @param classes {ClassValue[]} - Array of classes to merge
 * @returns {string}
 */
export const clsxMerge = (...classes: ClassValue[]): string =>
  twMerge(clsx(...classes));
