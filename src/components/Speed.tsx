import { FunctionComponent } from 'react';

import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

interface SpeedProps {
  speed: number;
  setSpeed: (event: number) => void;
}

const Speed: FunctionComponent<SpeedProps> = ({ speed, setSpeed }) => {
  const speedOptions = ['poco', 'medio', 'molto'];

  return (
    <div>
      <LabelIcon label="Quanto dura?" />
      {speedOptions.map((speedOption, index) => {
        let speedValue;

        if (index === 0) {
          speedValue = 3;
        } else if (index === 1) {
          speedValue = 2;
        } else {
          speedValue = 1;
        }

        return (
          <RadioButton
            isChecked={speed === index}
            key={index}
            label={speedOption}
            type="speed"
            value={index}
            speed={speedValue}
            setValue={setSpeed}
          />
        );
      })}
    </div>
  );
};

export default Speed;
