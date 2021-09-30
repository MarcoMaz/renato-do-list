import { FunctionComponent } from 'react';

interface RadioButtonProps {
  label: string;
  type: string;
  value: number;
  speed: number;
  isChecked: boolean;
  setValue: (event: number) => void;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({
  label,
  type,
  value,
  isChecked,
  setValue,
}) => {
  return (
    <label htmlFor={label}>
      {label}
      <input
        checked={isChecked}
        type="radio"
        id={label}
        name={type}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </label>
  );
};

export default RadioButton;
