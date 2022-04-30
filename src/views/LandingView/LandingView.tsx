import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Button from '../../components/core/Button';
import Headline from '../../components/core/Headline';
import Image from '../../components/core/Image';
import renatoImg1 from '../../assets/images/renato_1.jpg';

// Assets
import copyText from '../../assets/copyText';
import backgroundImageHeadline from '../../assets/images/renato_little-squares.png';

export const LandingView: FunctionComponent = () => {
  const { headline } = copyText.general;
  const { imageAlt, ctaLabel } = copyText.landingView;

  return (
    <div className="LandingView">
      <Headline
        className="LandingView__headline"
        isFirstElement
        label={headline}
        style={{
          backgroundImage: `url(${backgroundImageHeadline})`,
          backgroundRepeat: 'no-repeat',
          paddingLeft: '2rem',
          paddingBottom: '2px',
        }}
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
