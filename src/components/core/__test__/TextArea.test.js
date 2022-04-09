/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TextArea from '../TextArea';

const TextAreaElement = (
  <BrowserRouter>
    <TextArea />
  </BrowserRouter>
);

it('renders an input text', () => {
  render(TextAreaElement);
  const textArea = screen.getByRole('textbox');
  expect(textArea).toBeInTheDocument();
});
