import { FunctionComponent } from 'react';

import RadioButton from './core/RadioButton';

interface SpeedProps {
  speed: number;
  setSpeed: (event: number) => void;
}

const Speed: FunctionComponent<SpeedProps> = ({ speed, setSpeed }) => {
  const speedOptions = ['lento', 'medio', 'veloce'];
  return (
    <div>
      {speedOptions.map((speedOption, index) => (
        <RadioButton
          label={speedOption}
          type="speed"
          value={index}
          speed={speed}
          setSpeed={setSpeed}
        />
      ))}
    </div>
  );
};

export default Speed;
