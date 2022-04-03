import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Button from '../components/core/Button';
import Headline from '../components/core/Headline';
import Image from '../components/core/Image';
import SectionParagraphs from '../components/core/SectionParagraphs';

// CopyText
import copyText from '../assets/copyText';

export const IntroView1: FunctionComponent = () => {
  const { headline } = copyText.general;
  const { subheadline, arrayOfParagraphs } = copyText.introView1;
  const { alt, srcUrl } = copyText.introView1.image;
  const { label } = copyText.introView1.cta;

  return (
    <div className="IntroView1">
      <Headline
        className="IntroView1__headline"
        label={headline}
        isFirstElement
      />
      <Image className="IntroView1__image" alt={alt} srcUrl={srcUrl} />
      <Headline className="IntroView1__subheadline" label={subheadline} />
      <SectionParagraphs
        className="IntroView1__sectionParagraphs"
        arrayOfParagraphs={arrayOfParagraphs}
      />
      <Link to="/main" className="IntroView1__button">
        <Button type="button" label={label} arrowRight />
      </Link>
    </div>
  );
};

export default IntroView1;
