/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Urgency from '../Urgency';

const UrgencyElement = (
  <BrowserRouter>
    <Urgency />
  </BrowserRouter>
);

describe('The Urgency component renders', () => {
  it('its icon', () => {
    render(UrgencyElement);
    const urgency = screen.getByTestId('fi-alert-triangle');
    expect(urgency).toBeInTheDocument();
  });

  it('an headline', () => {
    render(UrgencyElement);
    const urgency = screen.getByText("Quanto e' importante?");
    expect(urgency).toBeInTheDocument();
  });

  it('Two Radio Buttons', () => {
    render(UrgencyElement);
    const urgency = screen.getAllByRole('radio');
    expect(urgency).toHaveLength(2);
  });

  it('the first radioButton', () => {
    render(UrgencyElement);
    const urgency = screen.getByText('non urgente');
    expect(urgency).toBeInTheDocument();
  });

  it('the second radioButton', () => {
    render(UrgencyElement);
    const urgency = screen.getByText('urgente');
    expect(urgency).toBeInTheDocument();
  });
});
