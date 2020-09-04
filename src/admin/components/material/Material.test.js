import React from 'react';
import { render } from '@testing-library/react';
import Material from "./Material";

test('renders learn react link', () => {
  const { getByText } = render(<Material />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
