# serif-ui-components

* **serif-ui-components** is a component library with React, Typescript and Tailwind CSS.

## See the full documentation

* [Documentation Link](https://serif-ui-components.netlify.app/)

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

* [Components Link](https://www.chromatic.com/builds?appId=5f9b0b0a7a3b0d0022b3b0b12)

## Roadmap

* Button :heavy_check_mark:
* Checkbox :heavy_check_mark:
* Input :construction:
* Select :construction:
