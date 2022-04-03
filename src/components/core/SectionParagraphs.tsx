import { FunctionComponent } from 'react';

interface SectionParagraphs {
  className?: string;
  arrayOfParagraphs: string[];
}

const SectionParagraphs: FunctionComponent<SectionParagraphs> = ({
  className,
  arrayOfParagraphs,
}) => {
  return (
    <section className={className} data-testid="section-paragraphs">
      {arrayOfParagraphs &&
        arrayOfParagraphs.map((paragraph) => <p>{paragraph}</p>)}
    </section>
  );
};

export default SectionParagraphs;
