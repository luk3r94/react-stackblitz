import React from 'react';
import './style.css';

const formatUser = (x) => {
  return x.name + ' ' + x.surname;
};

const user = {
  name: 'Luca',
  surname: 'Blasi',
};

export default function App() {
  const element0 = <h1>Hello {formatUser(user)}!</h1>;
  const element1 = React.createElement('h1', {
    children: 'Hello ' + formatUser(user) + '!',
  });
  const element2 = React.createElement(
    'h1',
    {},
    'Hello ' + formatUser(user) + '!'
  );
  // element0 = element1 = element2
  return element0;
}
