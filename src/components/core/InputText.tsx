// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react';

interface InputTextProps {
  value: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const InputText: FunctionComponent<InputTextProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <textarea
      rows={7}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputText;
