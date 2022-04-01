import { FunctionComponent } from 'react';

// Components
import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

interface SpeedProps {
  speed: number;
  setSpeed: (event: number) => void;
}

const Speed: FunctionComponent<SpeedProps> = ({ speed, setSpeed }) => {
  const speedOptions = [
    {
      id: 1,
      label: 'poco',
    },
    {
      id: 2,
      label: 'medio',
    },
    {
      id: 3,
      label: 'tanto',
    },
  ];

  return (
    <div>
      <LabelIcon label="Quanto dura?" />
      {speedOptions.map(({ label, id }, index) => {
        const handleChange = (e: { target: { value: string } }) => {
          if (e.target.value === 'poco') {
            setSpeed(1);
          } else if (e.target.value === 'medio') {
            setSpeed(2);
          } else {
            setSpeed(3);
          }
        };
        return (
          <RadioButton
            key={index}
            label={label}
            isChecked={id === speed}
            onChange={handleChange}
            name="speed option"
            value={label}
          />
        );
      })}
    </div>
  );
};

export default Speed;
