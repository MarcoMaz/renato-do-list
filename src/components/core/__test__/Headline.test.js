/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Headline from '../Headline';

const HeadlineElement = (
  <BrowserRouter>
    <Headline />
  </BrowserRouter>
);

it('renders an headline', () => {
  render(HeadlineElement);
  const headline = screen.getByRole('heading');
  expect(headline).toBeInTheDocument();
});
