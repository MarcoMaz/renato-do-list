/* eslint-disable react/button-has-type */
import { FunctionComponent } from 'react';

type AllowedButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type: AllowedButtonType;
  label: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  type = 'button',
  label,
  isDisabled,
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
