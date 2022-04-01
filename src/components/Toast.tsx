import { FunctionComponent } from 'react';

// CopyText
import copyText from '../assets/copyText';

const Toast: FunctionComponent = () => {
  const { label } = copyText.toast;

  return <div className="toast">{label}</div>;
};

export default Toast;
