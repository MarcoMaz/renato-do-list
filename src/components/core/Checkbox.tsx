import { FunctionComponent } from 'react';

interface CheckboxProps {
  id: number;
  isCompleted: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  isCompleted,
  onChange,
  label,
}) => {
  return (
    <>
      <input
        value={id}
        onChange={onChange}
        type="checkbox"
        checked={isCompleted}
      />
      {label}
    </>
  );
};

export default Checkbox;
