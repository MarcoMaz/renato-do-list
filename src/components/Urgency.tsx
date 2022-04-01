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
      id: 50,
      label: 'non urgente',
    },
    {
      id: 1800,
      label: 'urgente',
    },
  ];

  return (
    <div>
      <LabelIcon label="Quanto e' urgente?" />
      {urgencyOptions.map(({ label, id }, index) => {
        const handleChange = (e: { target: { value: string } }) => {
          e.target.value === 'non urgente' ? setUrgency(50) : setUrgency(1800);
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
