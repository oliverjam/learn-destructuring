import React from 'react';

// sumArray takes an array of two numbers and returns the sum of the numbers
// edit the parameters of the function to make this work
const sumArray = array => first + second;

// getAttribution takes a post object { title: string, author: string, timestamp: string }
// edit the parameters to make this work
const getAttribution = postObject => `${title} by ${author} @ ${timestamp}`;

// calculateTotal receives a bill object { subtotal: number, tax: number, tip: number || undefined }
// the tip might be undefined, in which case it should default to 10%
const calculateTotal = bill => {
  return subtotal * (1 + tax) * (1 + tip);
};

// ProfileCard receives a data object that contains a user { data: { user: { avatarSrc: string, username: string, githubUrl: string  } } }
const ProfileCard = data => (
  <div>
    <img src={avatarSrc} />
    <h3>{username}</h3>
    <a href={githubUrl}>Github profile</a>
  </div>
);

// Counter receives a prop called `step` that determines how much to increment each time
// Edit the render method so that it works properly
// You'll also need to look at the onClick on the button
class Counter extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <button
        onClick={() =>
          this.setState(prevState => ({ count: prevCount + step }))
        }
      >
        Count: {count}
      </button>
    );
  }
}

// ToggleCounter renders the counter if it is passed an `isOpen` prop
// This prop should defaul to `true`
// It only needs this one prop itself, and it needs to pass everything else
// it's given straight down to Counter

const ToggleCounter = props => {
  return isOpen ? <Counter {...restOfTheProps} /> : <div>I'm closed</div>;
};

export {
  sumArray,
  getAttribution,
  calculateTotal,
  ProfileCard,
  Counter,
  ToggleCounter,
};
