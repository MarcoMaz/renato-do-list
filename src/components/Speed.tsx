import { FunctionComponent } from 'react';

// Components
import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

// CopyText
import copyText from '../assets/copyText';

interface SpeedProps {
  className: string;
  speed: number;
  setSpeed: (event: number) => void;
}

const Speed: FunctionComponent<SpeedProps> = ({
  className,
  speed,
  setSpeed,
}) => {
  const { name, options } = copyText.speed;
  const { headlineLabel } = copyText.speed.headline;
  return (
    <div className={className}>
      <LabelIcon speedIcon label={headlineLabel} />
      {options.map(({ label, id }, index) => {
        const handleChange = (e: { target: { value: string } }) => {
          if (e.target.value === options[0].label) {
            setSpeed(options[0].id);
          } else if (e.target.value === options[1].label) {
            setSpeed(options[1].id);
          } else {
            setSpeed(options[2].id);
          }
        };
        return (
          <RadioButton
            className="AddEditTask__choice-radio"
            key={index}
            label={label}
            isChecked={id === speed}
            onChange={handleChange}
            name={name}
            value={label}
          />
        );
      })}
    </div>
  );
};

export default Speed;
