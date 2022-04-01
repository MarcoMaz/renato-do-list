import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const LandingView: FunctionComponent = () => {
  return (
    <div>
      This is the Landing page
      <Link to="/intro-1">
        <button type="button">Go on</button>
      </Link>
    </div>
  );
};

export default LandingView;
