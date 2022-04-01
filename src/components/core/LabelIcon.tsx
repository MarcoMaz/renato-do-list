import { FunctionComponent } from 'react';

// Icons
import { FiClock, FiAlertTriangle, FiSmile } from 'react-icons/fi';

interface LabelIconProps {
  label: string;
  speedIcon?: boolean;
  urgencyIcon?: boolean;
  funIcon?: boolean;
}

const LabelIcon: FunctionComponent<LabelIconProps> = ({
  label,
  speedIcon,
  urgencyIcon,
  funIcon,
}) => {
  return (
    <div>
      {speedIcon && <FiClock />}
      {urgencyIcon && <FiAlertTriangle />}
      {funIcon && <FiSmile />}
      {label}
    </div>
  );
};

export default LabelIcon;
