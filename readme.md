
## Getting Started

```bash
npm install
npm start
```

## Generate Components

To generate the scaffolding of a component, type:

```bash
npm run generate
```

Then, insert the component tag name. The tag must contain a dash (`-`) to work as a component. We use `qw` prefix.

Example of component:

```bash
qw-example
```

Use only css to style it (select/deselect with space bar when the cli ask you to choose)

After that, a new component will be generate in `src/components` folder

In the `.tsx` file change the `shadow` property from true to false (disable shadow DOM)

In the `.css` file change the `:host` selector with the name of the component.

Example:

```css
qw-example {
  display: block;
}
```

## Project goal

Build the following todo-list with stencil: 
https://sii.im/playground/notes/
