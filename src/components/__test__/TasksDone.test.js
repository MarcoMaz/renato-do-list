/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TasksDone from '../TasksDone';

const TasksDoneElement = (
  <BrowserRouter>
    <TasksDone />
  </BrowserRouter>
);

describe('TasksDoneElement renders ', () => {
  it('an headline', () => {
    render(TasksDoneElement);
    const headline = screen.getByRole('heading');
    expect(headline).toBeInTheDocument();
  });

  it('an unordered list', () => {
    render(TasksDoneElement);
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });
});
