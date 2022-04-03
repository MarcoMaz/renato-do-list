import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Button from '../components/core/Button';
import Headline from '../components/core/Headline';
import Image from '../components/core/Image';

// CopyText
import copyText from '../assets/copyText';

export const LandingView: FunctionComponent = () => {
  const { headline } = copyText.general;
  const { alt, srcUrl } = copyText.landingView.image;
  const { label } = copyText.landingView.cta;

  return (
    <div>
      <Headline isFirstElement label={headline} />
      <Image alt={alt} srcUrl={srcUrl} />
      <Link to="/intro-1">
        <Button type="button" label={label} arrowRight />
      </Link>
    </div>
  );
};

export default LandingView;
