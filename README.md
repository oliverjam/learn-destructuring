# Destructuring

Destructuring is a cool new ES6 feature that gets used in React a lot.

## Learn

It's a way to pull values out of arrays or objects and assign them to variables. For example:

```js
const [first, second] = [1, 2];
console.log(first, second); // 1 2

const { name, surname } = { name: 'Zooey', surname: 'Miller' };
console.log(name, surname); // "Zooey" "Miller"
```

You can also grab nested values:

```js
const {
  data: { name },
} = { data: { name: 'Zooey' } };
console.log(name); // "Zooey"
```

You can even set default values that will apply when the value is `undefined`:

```js
const {
  data: { name = 'Default' },
} = { data: {} };
console.log(name); // "Default"
```

It also works in function parameters:

```js
function formatName({ name, surname }) {
  return `${name} ${surname}`;
}
const user = { name: 'Zooey', surname: 'Miller' };
console.log(formatName(user)); // "Zooey Miller"
```

This enabled a cool pattern—named function parameters:

```js
function calculateTotal({ subtotal, tax, tip }) {
  return subtotal * (1 + tax) + tip;
}
const total = calculateTotal({ tax: 0.2, subtotal: 100, tip: 10 });
console.log(total); // 130
```

See how we don't have to worry about the order we pass the parameters in? It also makes the function self-documenting and it's easier to remember what values you're passing when you call the function.

Functional React components similarly take a single argument (props), so this pattern is used a lot there:

```jsx
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
```

It's also commonly used in the render method of a class component to avoid writing `this.props.` and `this.state.` all the time:

```jsx
class Stopwatch extends React.Component {
  state = {
    time: 0,
    running: false
  }
  render() {
    const { time, running } = this.state;
    return (...)
  }
}
```

Another nice trick is to combine destructuring with the rest operator (`...`) to pull off just the parameters you need:

```jsx
const TextInput = ({ id, label, ...otherProps }) => (
  <label htmlFor={id}>
    {label}
    <input id={id} {...otherProps} />
  </label>
);
```

You can also rename the properties during destructuring, in case there may be conflicts with ones you already have.

```js
import numbers from 'numbers';

const addAll = ({ numbers: myNumbers }) =>
  myNumbers.reduce((acc, el) => acc + el);
```

## Practice

Open `index.js` and edit each function/component to make the tests pass.
