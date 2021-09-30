import { FunctionComponent } from 'react';

import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

interface UrgencyProps {
  urgency: number;
  setUrgency: (event: number) => void;
}

const Urgency: FunctionComponent<UrgencyProps> = ({ urgency, setUrgency }) => {
  const urgencyOptions = ['non urgente', 'urgente'];

  return (
    <div>
      <LabelIcon label="Quanto e' urgente?" />
      {urgencyOptions.map((urgencyOption, index) => {
        let urgencyValue;

        if (index === 0) {
          urgencyValue = 1;
        } else {
          urgencyValue = 3;
        }
        return (
          <RadioButton
            isChecked={urgency === index}
            key={index}
            label={urgencyOption}
            type="urgency"
            value={index}
            speed={urgencyValue}
            setValue={setUrgency}
          />
        );
      })}
    </div>
  );
};

export default Urgency;
