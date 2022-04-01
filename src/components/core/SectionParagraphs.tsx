import { FunctionComponent } from 'react';

interface SectionParagraphs {
  arrayOfParagraphs: string[];
}

const SectionParagraphs: FunctionComponent<SectionParagraphs> = ({
  arrayOfParagraphs,
}) => {
  return (
    <section data-testid="section-paragraphs">
      {arrayOfParagraphs &&
        arrayOfParagraphs.map((paragraph) => <p>{paragraph}</p>)}
    </section>
  );
};

export default SectionParagraphs;
