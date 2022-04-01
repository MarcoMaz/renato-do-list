import { FunctionComponent } from 'react';

interface ToastProps {
  label: string;
}

const Toast: FunctionComponent<ToastProps> = ({ label }) => {
  return <div className="toast">{label}</div>;
};

export default Toast;
