import { FunctionComponent } from 'react';

interface LabelIconProps {
  label: string;
}

const LabelIcon: FunctionComponent<LabelIconProps> = ({ label }) => {
  return <div>{label}</div>;
};

export default LabelIcon;
