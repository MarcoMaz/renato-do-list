import { FunctionComponent } from 'react';

interface CheckboxProps {
  label: string;
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
    <div className="Task__checkbox">
      <input
        id={`checkbox-0${value}`}
        value={value}
        checked={isChecked}
        onChange={onChange}
        type="checkbox"
      />
      <label htmlFor={`checkbox-0${value}`}>{label}</label>
    </div>
  );
};

export default Checkbox;
