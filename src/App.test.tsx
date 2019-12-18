import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('returns updated list', () => {
  // find a way to call dispatch from here

  // find way to view updateed state
  const updatedState = {};
  expect(updatedState).toEqualObjectContaining({
    todoCustom: [ObjectContaining{ userId: expect().number(), }]
  });
});
