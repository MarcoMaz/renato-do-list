/* eslint-disable react/button-has-type */
import { FunctionComponent } from 'react';

type AllowedButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  label: string;
  type: AllowedButtonType;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  type = 'button',
  isDisabled,
  onClick,
}) => {
  return (
    <button type={type} disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
