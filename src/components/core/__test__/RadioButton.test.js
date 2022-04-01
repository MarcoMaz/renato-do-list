/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RadioButton from '../RadioButton';

const RadioButtonElement = (
  <BrowserRouter>
    <RadioButton />
  </BrowserRouter>
);

it('renders a label icon', () => {
  render(RadioButtonElement);
  const radioButton = screen.getByRole('radio');
  expect(radioButton).toBeInTheDocument();
});
