/* eslint-disable no-unused-expressions */
import { FunctionComponent } from 'react';

// Components
import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

interface FunProps {
  fun: number;
  setFun: (event: number) => void;
}

const Fun: FunctionComponent<FunProps> = ({ fun, setFun }) => {
  const funOptions = [
    {
      id: 1,
      label: 'divertente',
    },
    {
      id: 3,
      label: 'noioso',
    },
  ];

  return (
    <div>
      <LabelIcon label="quanto e' urgente?" />
      {funOptions.map(({ label, id }, index) => {
        const handleChange = (e: { target: { value: string } }) => {
          e.target.value === 'divertente' ? setFun(1) : setFun(3);
        };
        return (
          <RadioButton
            key={index}
            label={label}
            isChecked={id === fun}
            onChange={handleChange}
            name="fun option"
            value={label}
          />
        );
      })}
    </div>
  );
};

export default Fun;
