# Destructuring

Destructuring is a cool new ES6 feature that gets used in React a lot.

## Learn

It's a way to pull values out of arrays or objects and assign them to variables. For example:

```js
const [first, second] = [1, 2];
console.log(first, second); // 1 2

const { name, surname } = { name: "Zooey", surname: "Miller" };
console.log(name, surname); // "Zooey" "Miller"
```

You can also grab nested values:

```js
const {
  data: { name },
} = { data: { name: "Zooey" } };
console.log(name); // "Zooey"
```

You can even set default values that will apply when the value is `undefined`:

```js
const { name = "Default" } = { surname: "Miller" };
console.log(name); // "Default"
```

It also works in function parameters:

```js
function formatName({ name, surname }) {
  return `${name} ${surname}`;
}
const user = { name: "Zooey", surname: "Miller" };
console.log(formatName(user)); // "Zooey Miller"
```

This enables a cool pattern: named function parameters:

```js
function calculateTotal({ subtotal, tax, tip }) {
  return subtotal * (1 + tax) + tip;
}
const total = calculateTotal({ tax: 0.2, subtotal: 100, tip: 10 });
console.log(total); // 130
```

See how we don't have to worry about the order we pass the parameters in? It also makes the function self-documenting and it's easier to remember what values you're passing when you call the function.

React components similarly take a single argument (the props object), so this pattern is used a lot there:

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```

Another nice trick is to combine destructuring with the rest operator (`...`) to pull off just the props you need. You can then use the spread operator (also `...`) to copy all the other props onto another JSX element:

```jsx
function TextInput({ id, label, ...whateverYouWantToCallTheRest }) {
  return (
    <label htmlFor={id}>
      {label}
      <input id={id} {...whateverYouWantToCallTheRest} />
    </label>
  );
}
```

You can also rename the properties during destructuring, in case there may be conflicts with ones you already have.

```js
import numbers from "numbers";

const addAll = ({ numbers: myNumbers }) =>
  myNumbers.reduce((acc, el) => acc + el);
```

## Practice

1. Clone this repo and run `npm i`
1. Run `npm t` to start the test watcher
1. Open `index.js` and edit each function/component to make the tests pass.
