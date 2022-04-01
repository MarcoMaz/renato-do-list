import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

// Import Components
import Headline from '../components/core/Headline';
import Image from '../components/core/Image';

export const LandingView: FunctionComponent = () => {
  return (
    <div>
      <Headline
        isFirstElement
        label="This is the Landing Page"
        spanLabel="this its span"
      />
      <Image alt="landing view" srcUrl="#" />
      <Link to="/intro-1">
        <button type="button">Go on</button>
      </Link>
    </div>
  );
};

export default LandingView;
