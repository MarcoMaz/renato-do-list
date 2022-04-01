import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Headline from '../components/core/Headline';
import Image from '../components/core/Image';
import SectionParagraphs from '../components/core/SectionParagraphs';

export const IntroView1: FunctionComponent = () => {
  const arrayOfParagraphs = ['paragraph #1', 'paragraph #2', 'paragraph #3'];

  return (
    <div>
      <Headline
        label="This is the headline"
        spanLabel="This is its span"
        isFirstElement
      />
      <Headline label="this is the subheadline" />
      <Image alt="this is introview" srcUrl="#" />
      <SectionParagraphs arrayOfParagraphs={arrayOfParagraphs} />
      <Link to="/main">
        <button type="button">Go on</button>
      </Link>
    </div>
  );
};

export default IntroView1;
