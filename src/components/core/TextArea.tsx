// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent } from 'react';

interface TextAreaProps {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  id,
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="AddEditTask__textarea">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={7}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
