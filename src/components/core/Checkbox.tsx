import { FunctionComponent } from 'react';

interface CheckboxProps {
  id: number;
  isCompleted: boolean;
  label: string;
  onChange: () => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  isCompleted,
  label,
  onChange,
}) => {
  return (
    <>
      <input
        value={id}
        onChange={onChange}
        type="checkbox"
        checked={isCompleted}
      />
      <span aria-hidden="true">{label}</span>
    </>
  );
};

export default Checkbox;
