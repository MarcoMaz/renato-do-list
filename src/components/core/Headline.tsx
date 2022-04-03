import { FunctionComponent } from 'react';

interface HeadlineProps {
  label: string;
  isFirstElement?: boolean;
}

const Headline: FunctionComponent<HeadlineProps> = ({
  label,
  isFirstElement,
}) => {
  let headlineElement;

  if (isFirstElement) {
    headlineElement = <h1>{label}</h1>;
  } else {
    headlineElement = <h2>{label}</h2>;
  }

  return <>{headlineElement}</>;
};

export default Headline;
