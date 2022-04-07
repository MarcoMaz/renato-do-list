/* eslint-disable no-unused-expressions */
import { FunctionComponent } from 'react';

// Component
import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

// CopyText
import copyText from '../assets/copyText';

interface UrgencyProps {
  className: string;
  urgency: number;
  setUrgency: (event: number) => void;
}

const Urgency: FunctionComponent<UrgencyProps> = ({
  className,
  urgency,
  setUrgency,
}) => {
  const { name, options } = copyText.urgency;
  const { headlineLabel } = copyText.urgency.headline;
  return (
    <div className={className}>
      <LabelIcon urgencyIcon label={headlineLabel} />
      {options.map(({ label, id }, index) => {
        const handleChange = (e: { target: { value: string } }) => {
          e.target.value === options[0].label
            ? setUrgency(options[0].id)
            : setUrgency(options[1].id);
        };
        return (
          <RadioButton
            key={index}
            label={label}
            isChecked={id === urgency}
            onChange={handleChange}
            name={name}
            value={label}
          />
        );
      })}
    </div>
  );
};

export default Urgency;
