import { FunctionComponent } from 'react';

interface HeadlineProps {
  label: string;
  spanLabel?: string;
  isFirstElement?: boolean;
}

const Headline: FunctionComponent<HeadlineProps> = ({
  label,
  spanLabel,
  isFirstElement,
}) => {
  let headlineElement;

  if (isFirstElement) {
    headlineElement = (
      <h1>
        {label}
        {spanLabel && <span>{spanLabel}</span>}
      </h1>
    );
  } else {
    headlineElement = <h2>{label}</h2>;
  }

  return <>{headlineElement}</>;
};

export default Headline;
