/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TasksTodo from '../TasksTodo';

const TasksTodoElement = (
  <BrowserRouter>
    <TasksTodo />
  </BrowserRouter>
);

describe('TasksTodoElement renders ', () => {
  it('an headline', () => {
    render(TasksTodoElement);
    const headline = screen.getByRole('heading');
    expect(headline).toBeInTheDocument();
  });

  it('a button', () => {
    render(TasksTodoElement);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
