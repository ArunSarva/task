import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import additem from './Todo/Todo'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const additem=require('./Components/Todo/Todo');
test('it shoud set the sate', () => {
  const text1=  [{
    id: 10,
    name: "Learn Java",
    checked: true}
  ]
  expect(additem);
});