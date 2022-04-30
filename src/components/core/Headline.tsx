import { CSSProperties, FunctionComponent } from 'react';

interface HeadlineProps {
  label: string;
  isFirstElement?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Headline: FunctionComponent<HeadlineProps> = ({
  label,
  isFirstElement,
  className,
  style,
}) => {
  let headlineElement;

  if (isFirstElement) {
    headlineElement = (
      <h1 className={className} style={style}>
        {label}
      </h1>
    );
  } else {
    headlineElement = (
      <h2 className={className} style={style}>
        {label}
      </h2>
    );
  }

  return <>{headlineElement}</>;
};

export default Headline;
