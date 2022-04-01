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
      id: 30,
      label: 'poco',
    },
    {
      id: 2433,
      label: 'medio',
    },
    {
      id: 666,
      label: 'tanto',
    },
  ];

  return (
    <div>
      <LabelIcon label="Quanto dura?" />
      {speedOptions.map(({ label, id }, index) => {
        const handleChange = (e: { target: { value: string } }) => {
          if (e.target.value === 'poco') {
            setSpeed(30);
          } else if (e.target.value === 'medio') {
            setSpeed(2433);
          } else {
            setSpeed(666);
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
