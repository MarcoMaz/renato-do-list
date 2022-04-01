/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LabelIcon from '../LabelIcon';

const LabelIconElement = (
  <BrowserRouter>
    <LabelIcon />
  </BrowserRouter>
);

it('renders a label icon', () => {
  render(LabelIconElement);
  const labelIcon = screen.getByTestId('label-icon');
  expect(labelIcon).toBeInTheDocument();
});
