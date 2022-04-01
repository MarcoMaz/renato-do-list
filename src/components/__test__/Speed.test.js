/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Speed from '../Speed';

const SpeedElement = (
  <BrowserRouter>
    <Speed />
  </BrowserRouter>
);

describe('The Speed component renders', () => {
  it('its icon', () => {
    render(SpeedElement);
    const speed = screen.getByTestId('fi-clock');
    expect(speed).toBeInTheDocument();
  });

  it('an headline', () => {
    render(SpeedElement);
    const speed = screen.getByText('Quanto dura?');
    expect(speed).toBeInTheDocument();
  });

  it('Three Radio Buttons', () => {
    render(SpeedElement);
    const speed = screen.getAllByRole('radio');
    expect(speed).toHaveLength(3);
  });

  it('the first radioButton', () => {
    render(SpeedElement);
    const speed = screen.getByText('poco');
    expect(speed).toBeInTheDocument();
  });

  it('the second radioButton', () => {
    render(SpeedElement);
    const speed = screen.getByText('medio');
    expect(speed).toBeInTheDocument();
  });

  it('the third radioButton', () => {
    render(SpeedElement);
    const speed = screen.getByText('tanto');
    expect(speed).toBeInTheDocument();
  });
});
