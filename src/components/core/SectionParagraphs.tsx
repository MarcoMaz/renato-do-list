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
    <ol className={className} data-testid="section-paragraphs">
      {arrayOfParagraphs &&
        arrayOfParagraphs.map((paragraph, index) => (
          <li key={index}>{paragraph}</li>
        ))}
    </ol>
  );
};

export default SectionParagraphs;
