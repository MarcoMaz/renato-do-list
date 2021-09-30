import { FunctionComponent } from 'react';

interface InputTextProps {
  itemText: string;
  placeholder: string;
  setItemText: (event: string) => void;
}

const InputText: FunctionComponent<InputTextProps> = ({
  itemText,
  placeholder,
  setItemText,
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
