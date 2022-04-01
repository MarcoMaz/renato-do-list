/* eslint-disable react/button-has-type */
import { FunctionComponent } from 'react';

// import ICONS
import { FiX, FiArrowRight, FiPlus, FiChevronLeft } from 'react-icons/fi';

type AllowedButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  label?: string;
  type: AllowedButtonType;
  isDisabled?: boolean;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  closeSign?: boolean;
  plusSign?: boolean;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  type = 'button',
  isDisabled,
  arrowLeft,
  arrowRight,
  closeSign,
  plusSign,
  onClick,
}) => {
  return (
    <button type={type} disabled={isDisabled} onClick={onClick}>
      {arrowLeft && <FiChevronLeft />}
      {plusSign && <FiPlus />}
      {closeSign && <FiX />}
      {label}
      {arrowRight && <FiArrowRight />}
    </button>
  );
};

export default Button;
