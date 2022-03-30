import { FunctionComponent } from 'react';

import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

interface FunProps {
  fun: number;
  setFun: (event: number) => void;
}

const Fun: FunctionComponent<FunProps> = ({ fun, setFun }) => {
  const funOptions = [
    {
      id: 11,
      label: 'divertente',
    },
    {
      id: 121,
      label: 'noioso',
    },
  ];

  return (
    <div>
      <LabelIcon label="quanto e urgente?" />
      {funOptions.map((x, index) => {
        const handleInput = (e: { target: { value: string } }) => {
          if (e.target.value === 'divertente') {
            setFun(11);
          } else {
            setFun(121);
          }
        };
        return (
          <RadioButton
            key={index}
            label={x.label}
            isChecked={x.id === fun}
            handleChange={handleInput}
            name="maronno"
            value={x.label}
          />
        );
      })}
    </div>
  );
};

export default Fun;
