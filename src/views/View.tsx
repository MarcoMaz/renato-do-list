import { FunctionComponent } from 'react';

interface ViewProps {
  label: string;
}

export const View: FunctionComponent<ViewProps> = ({ label }) => {
  return <div>{label}</div>;
};
