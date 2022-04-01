/* eslint-disable no-unused-expressions */
import { FunctionComponent } from 'react';

// Component
import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

interface UrgencyProps {
  urgency: number;
  setUrgency: (event: number) => void;
}

const Urgency: FunctionComponent<UrgencyProps> = ({ urgency, setUrgency }) => {
  const urgencyOptions = [
    {
      id: 1,
      label: 'non urgente',
    },
    {
      id: 3,
      label: 'urgente',
    },
  ];

  return (
    <div>
      <LabelIcon label="Quanto e' urgente?" />
      {urgencyOptions.map(({ label, id }, index) => {
        const handleChange = (e: { target: { value: string } }) => {
          e.target.value === 'non urgente' ? setUrgency(1) : setUrgency(3);
        };
        return (
          <RadioButton
            key={index}
            label={label}
            isChecked={id === urgency}
            onChange={handleChange}
            name="mazzinga"
            value={label}
          />
        );
      })}
    </div>
  );
};

export default Urgency;
