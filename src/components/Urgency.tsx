import { FunctionComponent } from 'react';

import RadioButton from './core/RadioButton';

interface UrgencyProps {
  urgency: number;
  setUrgency: (event: number) => void;
}

const Urgency: FunctionComponent<UrgencyProps> = ({ urgency, setUrgency }) => {
  const funOptions = ['urgente', 'non-urgente'];

  return (
    <div>
      {funOptions.map((funOption, index) => (
        <RadioButton
          label={funOption}
          type="urgency"
          value={index * 33}
          speed={urgency}
          setSpeed={setUrgency}
        />
      ))}
    </div>
  );
};

export default Urgency;
