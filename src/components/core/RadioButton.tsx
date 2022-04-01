// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({
  label,
  name,
  isChecked,
  onChange,
}) => {
  return (
    <label htmlFor={label}>
      <input
        checked={isChecked}
        type="radio"
        id={label}
        name={name}
        value={label}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default RadioButton;
