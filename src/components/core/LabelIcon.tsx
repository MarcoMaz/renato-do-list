import { FunctionComponent } from 'react';

// Icons
import { FiClock, FiAlertTriangle, FiSmile } from 'react-icons/fi';

interface LabelIconProps {
  className?: string;
  label: string;
  speedIcon?: boolean;
  urgencyIcon?: boolean;
  funIcon?: boolean;
}

const LabelIcon: FunctionComponent<LabelIconProps> = ({
  className,
  label,
  speedIcon,
  urgencyIcon,
  funIcon,
}) => {
  return (
    <div className={className} data-testid="label-icon">
      {speedIcon && <FiClock data-testid="fi-clock" />}
      {urgencyIcon && <FiAlertTriangle data-testid="fi-alert-triangle" />}
      {funIcon && <FiSmile data-testid="fi-smile" />}
      {label}
    </div>
  );
};

export default LabelIcon;
