import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Button from '../../components/core/Button';
import Headline from '../../components/core/Headline';
import Image from '../../components/core/Image';
import renatoImg1 from '../../assets/images/renato_1.jpg';

// CopyText
import copyText from '../../assets/copyText';

export const LandingView: FunctionComponent = () => {
  const { headline } = copyText.general;
  const { imageAlt, ctaLabel } = copyText.landingView;

  return (
    <div className="LandingView">
      <Headline
        className="LandingView__headline"
        isFirstElement
        label={headline}
      />
      <Image
        alt={imageAlt}
        srcUrl={renatoImg1}
        className="LandingView__image"
      />
      <Link to="/intro-1" className="LandingView__button">
        <Button type="button" label={ctaLabel} arrowRight />
      </Link>
    </div>
  );
};

export default LandingView;
