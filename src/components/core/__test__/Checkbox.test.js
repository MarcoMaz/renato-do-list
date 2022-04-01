/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Checkbox from '../Checkbox';

const CheckboxElement = (
  <BrowserRouter>
    <Checkbox />
  </BrowserRouter>
);

it('renders a checkbox', () => {
  render(CheckboxElement);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
});
