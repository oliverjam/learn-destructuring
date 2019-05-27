import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import {
  sumArray,
  getAttribution,
  calculateTotal,
  listVenues,
  ProfileCard,
  Counter,
  ToggleCounter,
} from './';

// this stops Jest logging enormous red errors initially
// (because loads of variables in the React components are undefined)
beforeEach(() => {
  jest.spyOn(console, 'error');
  console.error.mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

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

test('listVenues', () => {
  const show = {
    band: 'Bullet For My Valentine',
    venues: ['O2 Academy', 'Alexandria Palace', 'Download'],
  };
  expect(listVenues(show)).toEqual(
    'Bullet For My Valentine are playing O2 Academy, Alexandria Palace, Download.'
  );
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

describe('ToggleCounter', () => {
  test('when closed', () => {
    const root = document.createElement('div');
    ReactDOM.render(<ToggleCounter isOpen={false} step={2} />, root);
    const div = root.querySelector('div');
    expect(div.textContent).toEqual(`I'm closed`);
  });
  test('when open by default', () => {
    const root = document.createElement('div');
    ReactDOM.render(<ToggleCounter step={2} />, root);
    const button = root.querySelector('button');
    expect(button.textContent).toEqual('Count: 0');
    TestUtils.Simulate.click(button);
    expect(button.textContent).toEqual('Count: 2');
  });
});
