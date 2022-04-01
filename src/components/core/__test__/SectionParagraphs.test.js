/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SectionParagraphs from '../SectionParagraphs';

const SectionParagraphsElement = (
  <BrowserRouter>
    <SectionParagraphs />
  </BrowserRouter>
);

it('renders a section with paragraphs', () => {
  render(SectionParagraphsElement);
  const sectionParagraphs = screen.getByTestId('section-paragraphs');
  expect(sectionParagraphs).toBeInTheDocument();
});
