# Creating a React component library using with Storybook, TypeScript, Eslint, Husky, Vite & TailwindCSS.

_This is a boilerplate for creating a React component library using with Storybook, TypeScript, Eslint, Husky, Vite & TailwindCSS._

> Owner: **Şerif Çolakel**

> Dates: **June 19, 2023**

> Npm Package: **[serif-ui-components](https://www.npmjs.com/package/serif-ui-components)**

# Create a React app with Vite and TypeScript

**You can follow these steps:**

- Install Node.js: Make sure you have Node.js installed on your machine. You can download it from the official Node.js website (**[https://nodejs.org](https://nodejs.org/)**).
- Install React Vite App with TypeScript: Run the following command to install:

```bash
npm create vite@latest serif-ui-components -- --template react
```

Replace **`serif-ui-components`** with the name you want to give to your project. This command will create a new directory named **`serif-ui-components`** and set up a basic React project with TypeScript.

- Navigate to the project directory: Run the following command to navigate into your project directory:

```bash
cd serif-ui-components
```

- Install the packages: Run the following command to install:

```bash
npm i
```

- Start the development server: Run the following command to start the development server:

```bash
npm run dev
```

# Add the Tailwind CSS

**You can follow these steps:**

- Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configure your template paths: Add the paths to all of your template files in your `tailwind.config.js` file.

```jsx
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add the Tailwind directives to your CSS: Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Add `@tailwindcss/forms` plugin in `tailwind.config.js` file :

```tsx
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // ? tailwinds form added here.
  ],
};
```

- Start using Tailwind in your project: Start using Tailwind’s utility classes to style your content.

```tsx
export default function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
```

# Add the Eslint, Airbnb Configuration

**You can follow these steps:,**

- Install the eslint as developer dependency: Run the following command to install:

```bash
npm i -D eslint
```

- Add the basic config file for eslint: Run the following command to start configuration with Eslint CLI:

```bash
npx eslint --init

You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y)
```

1. Question: `How would you like to use ESLint?` , select the `To check syntax and find problems` and hit enter.

```bash
? How would you like to use ESLint? ...
  To check syntax only
> To check syntax and find problems
  To check syntax, find problems, and enforce code style
```

2. Question : `What type of modules does your project use?` , select the `JavaScript modules (import/export)` and hit enter.

```bash
? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

3. Question : `Which framework does your project use?`, select the `React` and hit enter.

```bash
? Which framework does your project use? ...
> React
  Vue.js
  None of these
```

4. Question : `Does your project use TypeScript?` , select the `Yes` and hit enter.

```bash
? Does your project use TypeScript? » No / **Yes**
```

5. Question : `Where does your code run?`, select the `Browser` and hit enter.

```bash
? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
> Browser
  Node
```

6. Question : `What format do you want your config file to be in?`, select the `JavaScript` and hit enter.

```bash
? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON
```

7. Question : `Would you like to install them now? » No / Yes` , select the `Yes` and hit enter.

```bash
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now? » No / Yes
```

8. Last Question : `Which package manager do you want to use?` , select the `npm` and hit enter.

```bash
? Which package manager do you want to use? ...
> npm
  yarn
  pnpm
```

- Now we need to **setup a eslint style guide** in our project, **I am using airbnb**() as the base style. This helps a developer to write proper and clean code. Run the following command on the terminal:

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

```bash

npx install-peerdeps --dev eslint-config-airbnb

Need to install the following packages:
  install-peerdeps
Ok to proceed? (y) y*
```

- Install the `eslint-config-airbnb-typescript`, Then add the following command in `.eslintrc.cjs`.

```bash
npm i -D eslint-config-airbnb-typescript
```

```bash
extends: [
	// ... rest of your extends configuration.
  'airbnb',
	'airbnb-typescript'
]
```

- Override eslint rule to `.eslintrc.cjs` ([reference](https://eslint.org/docs/latest/)).

```jsx
rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'error',
}
```

# Add Prettier Configuration

**You can follow these steps:,**

- Install the `prettier` `eslint-config-prettier` and `eslint-plugin-prettier` as developer dependency: Run the following command to install:

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

- Create a `prettier.config.cjs` file, the copy and paste the following code block:

```bash
touch prettier.config.cjs
```

```jsx
/** @type {import("prettier").Options} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};

module.exports = config;
```

- Add `prettier` plugins the `.eslintrc.cjs` :

```jsx
// ...
plugins: [
    // ... other plugins
    'prettier'
  ],
// ...
```

- Add the `plugin:prettier/recommended` config to the extends array in your .`eslintrc.cjs` , it must be last in the extends array :

```jsx
extends: [
    // ... other extends
    'plugin:prettier/recommended'
  ],
```

- Reload the VS CODE window for setup initializing.

# Add Husky Configuration

**You can follow these steps:,**

- Install the `husky` and `lint-staged` as developer dependency: Run the following command to install:

```bash
npm i -D husky lint-staged
```

- If you don’t run before `git init` follow the next command :

```bash
git init
```

- Husky init configuration : Run the following command :

```bash
npx husky-init
```

- Set Husky configuration : Run the following command to change your husky configuration :

```bash
npx husky set .husky/pre-commit "npm run lint"
```

- Add the following script to `package.json` file.

```jsx
"lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
```

- Test the husky & eslint : Add the following code in your `App.tsx` :

```jsx
function App() {
  console.log('first'); // it will be showing eslint error.

  return <div>Test</div>;
}
```

- Check the husky command for commit your changes.

```bash
git add .husky/

git commit -m 'TEST (serif) : eslint & husky configuration test.'
```

```bash
// the check the terminal console

/Users/serifcolakel/Desktop/React/serif-ui-components/src/App.tsx
  8:3  error  Unexpected console statement  no-console

✖ 1 problem (1 error, 0 warnings)

husky - pre-commit hook exited with code 1 (error)
```

# Add Vitest Configuration

**You can follow these steps:,**

- Install the `vitest` as developer dependency: Run the following command to install:

```bash
npm i -D vitest
```

- Set the `vite.config.ts` with Run the following code block :

```tsx
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    environment: 'jsdom',
  },
  plugins: [react()],
});
```

- Install the `@testing-library/react` and `@testing-library/jest-dom` as developer dependency: Run the following command to install:

```tsx
npm i -D @testing-library/react @testing-library/jest-dom
```

- Create `setupTest.ts` file :

```bash
touch setupTest.ts
```

- Write the following code block to `setupTest.ts` file :

```tsx
/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
```

- Add the test script to `package.json` :

```tsx
"scripts": {
	   // ...
    "test": "vitest"
  },
```

- Writing first test case in `App.tsx` , first step create `App.test.tsx` then write the following code block :

```tsx
// App.tsx
export default function App() {
  return (
    <div data-testid="app-wrapper">
      <h1>Hello, world!</h1>
    </div>
  );
}
```

```tsx
// App.test.tsx
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

// ? INFO (serif): ABOUT TEST WRITING STEPS
// ! 1. Arrange : render the component under test
// ! 2. Act : get the element to test
// ! 3. Assert : check the element is in the document

// ? CHECK (serif) : THE COMMON MISTAKE -> https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

describe('App', () => {
  it('should render the title', () => {
    // Arrange : render the component under test
    render(<App />);

    // Act : get the element to test

    // Assert
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
  });
});
```

- Run the test script for test your `*.test.ts` files.

```bash
npm run test
```

- Add the lint script to `pre-commit` in `.husky` file for checking test :

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run test # add this line
npm run lint
```

# Add Storybook

**You can follow these steps:** [reference](https://storybook.js.org/docs/react/builders/vite)

- Install the `storybook` : Run the following command to install:

```bash
npx storybook@latest init
```

- Add the tailwind style to `storybook` : Write the code block to in top level `.storybook` in `preview.ts` :

```tsx
import type { Preview } from '@storybook/react';
// add next line
import '../src/index.css';

const preview: Preview = {
  // ...
};
```

- Run the `storybook` :

```bash
npm run storybook
```

# Creating First Component

**You can follow these steps:**

- Install the `class-variance-authority` , `tailwind-merge` and `clsx` as developer dependency: Run the following command to install:

```bash
npm i class-variance-authority tailwind-merge clsx
```

- Create the `src/common/utils/classNameUtils.ts` file, then add `clsxMerge` util for className merge with tailwind styles.

```
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
```

- Create a `helper.ts` for `Button.tsx` component : file path `src/components/button/helpers.ts`

```tsx
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
```

- Create a `Button.tsx` component : file path `src/components/button/Button.tsx`

```tsx
import React, { type ComponentPropsWithRef } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { clsxMerge } from '../../common/utils/classNameUtils';
import { buttonStyles } from './helpers';

type ButtonElementProps = ComponentPropsWithRef<'button'>;

export interface ButtonProps
  extends ButtonElementProps,
    VariantProps<typeof buttonStyles> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}

export default function Button({
  className,
  buttonType,
  size,
  rounded,
  label,
  rightIcon,
  spacing,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsxMerge(
        buttonStyles({ buttonType, size, rounded, spacing }),
        className
      )}
      type="button"
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
}
```

- Write test for `Button.tsx` component : file path is `src/components/button/Button.test.tsx` .

```tsx
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
```

- Add `Button.tsx` component for `stories` : file name `Button.stories.ts`.

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
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
```

- Run the test : Run the following test script on terminal.

```bash
npm run test
```

- Great 🎉 You have custom `Button` component. Show component on the `storybook` : Run the following `storybook` script on terminal.

```bash
npm run storybook
```

# Publish to NPM 📦

- Add the `components` in the root level `index.ts` file. Add the following code in the `index.ts` file.

```ts
export { default as Button } from './src/components/button/Button';
```

- Install `vite-plugin-dts` plugin for `vite` as a dev dependency. Run the following command on terminal.

```bash
  npm i -D vite-plugin-dts
```

- Add the `vite-plugin-dts` plugin in the `vite.config.ts` file. Add the following code in the `vite.config.ts` file.

```ts
import dts from 'vite-plugin-dts';

export default defineConfig({
  // ... other configs
  plugins: [
    // ... other plugins
    dts(),
  ],
});
```

- Install the `types/node` package as a dev dependency. Run the following command on terminal.

```bash
  npm i -D @types/node
```

- Add configs in `vite.config.ts` file `build` option `lib` and `rollupOptions` :

```ts
// vite.config.ts

import path from 'path';

export default defineConfig({
  // ... other configs
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'serif-ui-components',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
```

- Add the `src` and `index.ts`, set the `"declaration": true` and `"allowSyntheticDefaultImports": true` in the `tsconfig.json` file.

```json
{
  "compilerOptions": {
    // ... other compiler options
    "declaration": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["index.ts", "src"]
}
```

- Add the `package.json` file `main`, `types`, `exports`, `files` and `module` option.

```json
{
  "license": "MIT",
  "author": {
    "name": "Serif Colakel",
    "email": "serifcolakel0@gmail.com"
  },
  "description": "UI Components with React & Typescript with TailwindCSS",
  "main": "dist/index.umd.js",
  "module": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.js",
      "types": "./dist/index.d.ts"
    },
    "./package.json": "./package.json",
    "./dist/*": "./dist/*"
  },
  "files": ["/dist"],
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    // ...
  },
  "devDependencies": {
    // ...
  },
  "dependencies": {
    // ...
  }
}
```

- Add the new release `scripts` in the `./scripts/release.sh` file.

```bash
  #!/bin/bash

  # Read the current package.json version
  current_version=$(node -p "require('./package.json').version")
  echo "Current version: $current_version"

  # Increment the version number
  new_version=$(npm version --no-git-tag-version patch)
  echo "New version: $new_version"

  # Build the project
  $(npm run build)

  # Publish the project
  $(npm publish --access public)

  # Commit the changes
  git add .
  git commit -m "RELEASE (serif) : new release $new_version"
  git push origin main

  # Inform the user
  echo "Released $new_version"
```

- Add the `release` script in the `package.json` file.

```json
{
  "scripts": {
    // ...
    "release": "sh ./scripts/release.sh"
  }
}
```

Congratulations 🎉 You have published your first `npm` package.

# Publish to Chromatic 🎨

In this section, we will publish the `storybook` project to the `Chromatic`. [reference](https://www.youtube.com/watch?v=2tqRpBcV8ug)

- Create a new account on [Chromatic](https://www.chromatic.com/).

- First build the `storybook` project. Run the following command on terminal.

```bash
npm run build-storybook
```

- Validate the `storybook` project.
  
```bash
npx http-server ./storybook-static
```

- Publish to Github.

> * In this section, push to the `Github` repository.

- Create project on the `Chromatic` and copy the `project token`.

> * Reference : [Chromatic](https://www.chromatic.com/)

- Create a `.env` file in the root directory and add the `CHROMATIC_PROJECT_TOKEN` variable.

```env
CHROMATIC_PROJECT_TOKEN=your_chromatic_project_token
```

- Add the `chromatic` script in the `package.json` file.

```json
{
  "scripts": {
    // ...
    "chromatic": "npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN"
  }
}
```

- Install the `chromatic` package as a dev dependency. Run the following command on terminal.

```bash
npm install --save-dev chromatic
```

- Publish to Storybook to `Chromatic`. Run the following command on terminal.

```bash
npm run chromatic
```

Congratulations 🎉 You have published your first `storybook` project to the `Chromatic`.

## Conclusions 📝

React, TypeScript, and Tailwind CSS form a powerful combination for building modern web applications. React's component-based approach, coupled with TypeScript's type checking and Tailwind CSS's rapid styling capabilities, enables developers to create scalable and visually appealing UIs.

Tools such as Eslint, Husky, and Prettier contribute to enhancing code quality and maintainability. Eslint enforces coding standards and identifies potential errors, Husky automates checks before and after Git operations, and Prettier ensures consistent code formatting. By using these tools, developers can write cleaner and more reliable code.

Vitest and Jest-dom provide efficient testing capabilities for React components. Vitest allows for the execution of test scenarios, ensuring the correct behavior of components, while Jest-dom offers a comprehensive set of utilities for writing component tests. These testing tools aid in improving the reliability and functionality of the developed UI components.

Storybook, combined with Chromatic, offers a seamless workflow for developing and showcasing UI components. Storybook enables developers to isolate and iterate on components, while Chromatic provides a platform for visual regression testing and browser compatibility checks. This integration streamlines the component development process and ensures consistent user experiences across different environments.

Overall, by leveraging these technologies and tools, developers can create high-quality UI components, improve code maintainability, and streamline their development workflows. The combination of React, TypeScript, and Tailwind CSS, along with the integration of testing and deployment tools, empowers developers to build robust and visually appealing web applications.

Thank you for reading this article. I hope you enjoyed it. If you have any questions, please feel free to contact me.

## References 📚

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Chromatic](https://www.chromatic.com/)
- [NPM](https://www.npmjs.com/)
- [Vite](https://vitejs.dev/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
