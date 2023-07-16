import { type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentPropsWithRef, useId } from 'react';
import { checkBoxStyles } from './helpers';

type CheckboxElementProps = ComponentPropsWithRef<'input'>;

interface CheckboxProps
  extends CheckboxElementProps,
    VariantProps<typeof checkBoxStyles> {
  label: string;
}

export default function Checkbox({
  label,
  className,
  inputSize,
  rounded,
  intent,
  ...props
}: CheckboxProps) {
  const checkboxId = `checkbox-${useId()}`;

  return (
    <label
      className="flex flex-row items-center font-medium text-gray-500 cursor-pointer select-none hover:text-gray-700 group gap-x-2"
      htmlFor={checkboxId}
    >
      <input
        className={clsx(
          className,
          checkBoxStyles({ inputSize, rounded, intent })
        )}
        id={checkboxId}
        {...props}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  );
}
