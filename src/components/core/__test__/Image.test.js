/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Image from '../Image';

const ImageElement = (
  <BrowserRouter>
    <Image />
  </BrowserRouter>
);

it('renders an image', () => {
  render(ImageElement);
  const image = screen.getByRole('figure');
  expect(image).toBeInTheDocument();
});
