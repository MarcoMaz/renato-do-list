/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Fun from '../Fun';

const FunElement = (
  <BrowserRouter>
    <Fun />
  </BrowserRouter>
);

describe('The Fun component renders', () => {
  it('its icon', () => {
    render(FunElement);
    const fun = screen.getByTestId('fi-smile');
    expect(fun).toBeInTheDocument();
  });

  it('an headline', () => {
    render(FunElement);
    const fun = screen.getByText("Quanto e' divertente?");
    expect(fun).toBeInTheDocument();
  });

  it('Two Radio Buttons', () => {
    render(FunElement);
    const fun = screen.getAllByRole('radio');
    expect(fun).toHaveLength(2);
  });

  it('the first radioButton', () => {
    render(FunElement);
    const fun = screen.getByText('tanto');
    expect(fun).toBeInTheDocument();
  });

  it('the second radioButton', () => {
    render(FunElement);
    const fun = screen.getByText('poco');
    expect(fun).toBeInTheDocument();
  });
});
