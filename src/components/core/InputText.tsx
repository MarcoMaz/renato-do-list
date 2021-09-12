import { FunctionComponent } from 'react';

interface InputTextProps {
  itemText: string;
  setItemText: (event: string) => void;
  placeholder: string;
}

const InputText: FunctionComponent<InputTextProps> = ({
  itemText,
  setItemText,
  placeholder,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={itemText}
      onChange={(event) => setItemText(event.target.value)}
    />
  );
};

export default InputText;
