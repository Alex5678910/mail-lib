import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

test('renders привет', () => {
  render(<App/>);
  const linkElement = screen.getByText(/HELLO/);
  expect(linkElement).toBeInTheDocument();
});
