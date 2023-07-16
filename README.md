# serif-ui-components

* **serif-ui-components** is a component library with React, Typescript and Tailwind CSS.

## See the Full Documentation

* [Documentation Link](https://github.com/serifcolakel/serif-ui-components/blob/main/DOCUMENTATION.md)

## Install

```bash
  npm install serif-ui-components
  # or
  yarn add serif-ui-components
```

## Usage

* Add the `index.css` file to the root of your project.

```tsx
  import 'serif-ui-components/dist/index.css'
```
* Import components and use them.
```tsx
import { Button } from 'serif-ui-components'

const App = () => {
  return (
    <div>
      <Button buttonType="outline" label="Serif test" />
    </div>
  )
}
```

## See All Components in Chromatic

* [Components Link](https://64b3a5aefbe2fe6df3fbcf12-jqpiroqtxc.chromatic.com/)

## Roadmap

* Button :heavy_check_mark:
* Checkbox :heavy_check_mark:
* Input :construction:
* Select :construction:
