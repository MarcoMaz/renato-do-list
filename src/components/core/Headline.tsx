import { FunctionComponent } from 'react';

interface HeadlineProps {
  label: string;
  isFirstElement?: boolean;
  className?: string;
}

const Headline: FunctionComponent<HeadlineProps> = ({
  label,
  isFirstElement,
  className,
}) => {
  let headlineElement;

  if (isFirstElement) {
    headlineElement = <h1 className={className}>{label}</h1>;
  } else {
    headlineElement = <h2 className={className}>{label}</h2>;
  }

  return <>{headlineElement}</>;
};

export default Headline;
