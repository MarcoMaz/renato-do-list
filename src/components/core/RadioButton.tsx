import { FunctionComponent } from 'react';

interface RadioButtonProps {
  label: string;
  type: string;
  value: number;
  speed: number;
  setSpeed: (event: number) => void;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({
  label,
  type,
  value,
  setSpeed,
}) => {
  return (
    <label htmlFor={label}>
      {label}
      <input
        type="radio"
        id={label}
        name={type}
        value={value}
        onChange={(e) => setSpeed(Number(e.target.value))}
      />
    </label>
  );
};

export default RadioButton;
