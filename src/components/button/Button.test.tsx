import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(container.firstChild).toHaveClass('bg-violet-500');
    expect(container.firstChild).toHaveClass('text-white');
    expect(container.firstChild).toHaveClass('rounded-md');
    expect(container.firstChild).toHaveClass('px-4');
  });

  it('renders correctly with left icon', () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>}>Click Me</Button>
    );

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('👈');
  });

  it('renders correctly with right icon', () => {
    const { container } = render(
      <Button rightIcon={<span>👉</span>}>Click Me</Button>
    );

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('👉');
  });

  it('renders correctly with both icons', () => {
    const { container } = render(
      <Button leftIcon={<span>👈</span>} rightIcon={<span>👉</span>} />
    );

    expect(container).toHaveTextContent('👈');
    expect(container).toHaveTextContent('👉');
  });

  it('renders correctly with label', () => {
    const { container } = render(<Button label="Click Me" />);

    expect(container).toHaveTextContent('Click Me');
  });

  it('renders correctly with label and left icon', () => {
    const { container } = render(
      <Button
        label="Click Me"
        leftIcon={<span>👈</span>}
        rightIcon={<span>👉</span>}
      />
    );

    expect(container).toHaveTextContent('Click Me');
    expect(container).toHaveTextContent('👈');
    expect(container).toHaveTextContent('👉');
  });

  it('render correctly with size prop', () => {
    const { container } = render(<Button size="default" />);

    const { container: containerSmall } = render(<Button size="small" />);

    const { container: containerLarge } = render(<Button size="large" />);

    const { container: containerXXL } = render(<Button size="xxl" />);

    expect(container.firstChild).toHaveClass('text-base');
    expect(containerSmall.firstChild).toHaveClass('text-sm');
    expect(containerLarge.firstChild).toHaveClass('text-lg');
    expect(containerXXL.firstChild).toHaveClass('text-2xl');
  });

  it('render correctly with rounded prop', () => {
    const { container } = render(<Button rounded="full" />);

    const { container: containerLg } = render(<Button rounded="lg" />);

    const { container: containerNone } = render(<Button rounded="none" />);

    const { container: containerXL } = render(<Button rounded="xl" />);

    const { container: containerXXL } = render(<Button rounded="xxl" />);

    const { container: containerDefault } = render(
      <Button rounded="default" />
    );

    const { container: containerSM } = render(<Button rounded="sm" />);

    expect(container).toMatchSnapshot();
    expect(containerLg).toMatchSnapshot();
    expect(containerNone).toMatchSnapshot();
    expect(containerXL).toMatchSnapshot();
    expect(containerXXL).toMatchSnapshot();
    expect(containerDefault).toMatchSnapshot();
    expect(containerSM).toMatchSnapshot();

    expect(container.firstChild).toHaveClass('rounded-full');
    expect(containerLg.firstChild).toHaveClass('rounded-lg');
    expect(containerNone.firstChild).toHaveClass('rounded-none');
    expect(containerXL.firstChild).toHaveClass('rounded-xl');
    expect(containerXXL.firstChild).toHaveClass('rounded-2xl');
    expect(containerDefault.firstChild).toHaveClass('rounded-md');
    expect(containerSM.firstChild).toHaveClass('rounded-sm');
  });

  it('render correctly with buttonType prop', () => {
    const { container: containerPrimary } = render(
      <Button buttonType="primary" />
    );

    const { container } = render(<Button buttonType="secondary" />);

    const { container: containerWarning } = render(
      <Button buttonType="warning" />
    );

    const { container: containerOutline } = render(
      <Button buttonType="outline" />
    );

    const { container: containerDisabled } = render(
      <Button buttonType="disabled" />
    );

    const { container: containerError } = render(<Button buttonType="error" />);

    expect(container).toMatchSnapshot();
    expect(containerPrimary).toMatchSnapshot();
    expect(containerWarning).toMatchSnapshot();
    expect(containerOutline).toMatchSnapshot();
    expect(containerDisabled).toMatchSnapshot();
    expect(containerError).toMatchSnapshot();

    expect(containerPrimary.firstChild).toHaveClass(
      'bg-violet-500 text-white border-violet-500 hover:bg-violet-600'
    );
    expect(container.firstChild).toHaveClass(
      'bg-gray-200 text-gray-600 border-gray-200 hover:bg-gray-300'
    );
    expect(containerOutline.firstChild).toHaveClass(
      'bg-white text-gray-600 hover:bg-gray-100 border hover:border-gray-100 border-gray-300 hover:shadow-md'
    );
    expect(containerWarning.firstChild).toHaveClass(
      'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600'
    );

    expect(containerDisabled.firstChild).toHaveClass(
      'bg-black text-white border-black cursor-not-allowed'
    );

    expect(containerError.firstChild).toHaveClass(
      'bg-red-500 text-white border-red-500 hover:bg-red-600'
    );
  });
});
