/* eslint-disable no-unused-expressions */
import { FunctionComponent } from 'react';

// Components
import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

// CopyText
import copyText from '../assets/copyText';

interface FunProps {
  className: string;
  fun: number;
  setFun: (event: number) => void;
}

const Fun: FunctionComponent<FunProps> = ({ className, fun, setFun }) => {
  const { name, options } = copyText.fun;
  const { headlineLabel } = copyText.fun.headline;
  return (
    <div className={className}>
      <LabelIcon
        className="AddEditTask__choice-label"
        funIcon
        label={headlineLabel}
      />
      <div className="AddEditTask__choice-radio-wrapper">
        {options.map(({ label, id }, index) => {
          const handleChange = (e: { target: { value: string } }) => {
            e.target.value === options[0].label
              ? setFun(options[0].id)
              : setFun(options[1].id);
          };
          return (
            <RadioButton
              className={`AddEditTask__choice-radio ${
                id === fun ? '-selected' : ''
              }`}
              key={index}
              label={label}
              isChecked={id === fun}
              onChange={handleChange}
              name={name}
              value={label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Fun;
