/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../Button';

const ButtonElement = (
  <BrowserRouter>
    <Button />
  </BrowserRouter>
);

it('renders a button', () => {
  render(ButtonElement);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
