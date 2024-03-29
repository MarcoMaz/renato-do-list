/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/button-has-type */
import { FunctionComponent } from 'react';

// import ICONS
import {
  FiTrash2,
  FiEdit2,
  FiArrowRight,
  FiPlus,
  FiChevronLeft,
} from 'react-icons/fi';

type AllowedButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  className?: string;
  label?: string;
  type: AllowedButtonType;
  isDisabled?: boolean;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  trashSign?: boolean;
  plusSign?: boolean;
  editSign?: boolean;
  onClick?: (e?: any) => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  label,
  type = 'button',
  isDisabled,
  arrowLeft,
  arrowRight,
  editSign,
  trashSign,
  plusSign,
  onClick,
}) => {
  return (
    <button
      className={className}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {arrowLeft && <FiChevronLeft data-testid="fi-chevron-left" />}
      {plusSign && <FiPlus />}
      {editSign && <FiEdit2 />}
      {trashSign && <FiTrash2 />}
      {label}
      {arrowRight && <FiArrowRight />}
    </button>
  );
};

export default Button;
