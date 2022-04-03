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
        arrayOfParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
    </section>
  );
};

export default SectionParagraphs;
