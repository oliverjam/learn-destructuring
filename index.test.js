import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import {
  sumArray,
  getAttribution,
  calculateTotal,
  ProfileCard,
  Counter,
} from './';

test('sumArray', () => {
  const testArray = [1, 2];
  expect(sumArray(testArray)).toEqual(3);
});

test('getAttribution', () => {
  const post = {
    title: 'Hummus is great',
    author: 'Zooey',
    timestamp: '20/05/18',
  };
  expect(getAttribution(post)).toEqual('Hummus is great by Zooey @ 20/05/18');
});

test('calculateTotal', () => {
  const bill = { subtotal: 100, tax: 0.2 };
  expect(calculateTotal(bill)).toEqual(132);
});

test('ProfileCard', () => {
  const data = {
    user: {
      username: 'oliverjam',
      avatarSrc: 'https://github.com/oliverjam.png',
      githubUrl: 'https://github.com/oliverjam',
    },
  };
  const root = document.createElement('div');
  ReactDOM.render(<ProfileCard data={data} />, root);
  const image = root.querySelector('img');
  expect(image.src).toEqual('https://github.com/oliverjam.png');
});

test('Counter', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Counter step={2} />, root);
  const button = root.querySelector('button');
  expect(button.textContent).toEqual('Count: 0');
  TestUtils.Simulate.click(button);
  expect(button.textContent).toEqual('Count: 2');
});
