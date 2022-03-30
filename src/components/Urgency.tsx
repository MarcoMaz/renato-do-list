import { FunctionComponent } from 'react';

import LabelIcon from './core/LabelIcon';
// import RadioButton from './core/RadioButton';

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
      {urgencyOptions.map((x, index) => {
        const handleInput = (e: { target: { value: string } }) => {
          if (e.target.value === 'non urgente') {
            setUrgency(50);
          } else {
            setUrgency(1800);
          }
        };
        return (
          <label key={index} htmlFor={x.label}>
            <input
              checked={x.id === urgency}
              onChange={handleInput}
              type="radio"
              id={x.label}
              name="drone"
              value={x.label}
            />
            {x.label}
          </label>
        );
      })}
    </div>
  );
};

export default Urgency;
