import { FunctionComponent } from 'react';

// CopyText
import copyText from '../assets/copyText';

const Toast: FunctionComponent = () => {
  return <div className="Toast">{copyText.toastLabel}</div>;
};

export default Toast;
