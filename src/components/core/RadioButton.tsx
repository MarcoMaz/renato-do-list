// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react';

interface RadioButtonProps {
  label: string;
  isChecked: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({
  label,
  isChecked,
  handleChange,
  name,
}) => {
  return (
    <label htmlFor={label}>
      <input
        checked={isChecked}
        type="radio"
        id={label}
        name={name}
        value={label}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export default RadioButton;
