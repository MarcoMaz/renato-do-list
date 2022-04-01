/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Toast from '../Toast';

const ToastElement = (
  <BrowserRouter>
    <Toast />
  </BrowserRouter>
);

it('renders a toast element', () => {
  render(ToastElement);
  const toast = screen.getByText('Hai rimosso una task');
  expect(toast).toBeInTheDocument();
});
