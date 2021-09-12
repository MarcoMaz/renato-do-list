/* eslint-disable react/button-has-type */
import { FunctionComponent } from 'react';

type AllowedButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type: AllowedButtonType;
  label: string;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  type = 'button',
  label,
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
