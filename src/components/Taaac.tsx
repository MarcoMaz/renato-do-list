/* eslint-disable no-console */
import { FunctionComponent } from 'react';

import taaac from '../assets/images/renato-tac.jpg';

import taaacLabel from '../assets/copyText';

import Image from './core/Image';

const Taaac: FunctionComponent = () => {
  const string = 'Taaac';
  const stringDivided = string.split('');

  // eslint-disable-next-line prettier/prettier
  console.log("stringDivided", stringDivided);

  return (
    <div className="Taaac">
      <Image alt={taaacLabel.taaacLabel} srcUrl={taaac} />
      <div className="Taaac__label">
        {string.split('').map((char, index) => {
          const style = {
            animationDelay: `${index / 15}s`,
            fontSize: `${25 + index * 10}px`,
          };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Taaac;

/*
          {this.props.copy.split("").map(function(char, index){
            let style = {"animation-delay": (0.5 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}

          */
