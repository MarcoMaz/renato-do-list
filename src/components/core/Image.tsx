import { FunctionComponent } from 'react';

interface ImageProps {
  alt: string;
  srcUrl: string;
}

const Image: FunctionComponent<ImageProps> = ({ alt, srcUrl }) => {
  return (
    <figure>
      <img alt={alt} src={srcUrl} />
    </figure>
  );
};

export default Image;
