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
    <div>
      <Headline label={headline} isFirstElement />
      <Headline label={subheadline} />
      <Image alt={alt} srcUrl={srcUrl} />
      <SectionParagraphs arrayOfParagraphs={arrayOfParagraphs} />
      <Link to="/main">
        <Button type="button" label={label} arrowRight />
      </Link>
    </div>
  );
};

export default IntroView1;
