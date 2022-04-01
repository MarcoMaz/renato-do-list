// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react';

interface InputTextProps {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: FunctionComponent<InputTextProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputText;
