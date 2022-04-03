import { FunctionComponent } from 'react';

interface ImageProps {
  alt: string;
  srcUrl: string;
  className?: string;
}

const Image: FunctionComponent<ImageProps> = ({ alt, srcUrl, className }) => {
  return (
    <figure className={className}>
      <img alt={alt} src={srcUrl} />
    </figure>
  );
};

export default Image;
