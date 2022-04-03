import { FunctionComponent } from 'react';

interface CheckboxProps {
  label?: string;
  value: number;
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  label,
  value,
  isChecked,
  onChange,
}) => {
  return (
    <>
      <input
        value={value}
        checked={isChecked}
        onChange={onChange}
        type="checkbox"
      />
      <span aria-hidden="true">{label}</span>
    </>
  );
};

export default Checkbox;
