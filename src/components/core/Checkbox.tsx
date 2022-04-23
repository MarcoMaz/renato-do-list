/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from 'react';

interface CheckboxProps {
  label: string;
  value: number;
  isChecked: boolean;
  onChange: () => void;
  onTouchStart: (e: any) => void;
  onTouchMove: (e: any) => void;
  onTouchEnd: () => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  label,
  value,
  isChecked,
  onChange,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  return (
    <div
      className="Task__checkbox"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
