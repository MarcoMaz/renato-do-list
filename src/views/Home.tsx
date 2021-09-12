import { FunctionComponent } from 'react';

interface HomeProps {
  label: string;
}

export const Home: FunctionComponent<HomeProps> = ({ label }) => {
  return <div>{label}</div>;
};
