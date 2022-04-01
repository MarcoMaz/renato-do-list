/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InputText from '../InputText';

const InputTextElement = (
  <BrowserRouter>
    <InputText />
  </BrowserRouter>
);

it('renders an input text', () => {
  render(InputTextElement);
  const inputText = screen.getByRole('textbox');
  expect(inputText).toBeInTheDocument();
});
