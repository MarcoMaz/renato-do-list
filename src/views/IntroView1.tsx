import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const IntroView1: FunctionComponent = () => {
  return (
    <div>
      This is the fist Splash page
      <Link to="/main">
        <button type="button">Go on</button>
      </Link>
    </div>
  );
};

export default IntroView1;
