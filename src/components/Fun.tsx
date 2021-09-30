import { FunctionComponent } from 'react';

import LabelIcon from './core/LabelIcon';
import RadioButton from './core/RadioButton';

interface FunProps {
  fun: number;
  setFun: (event: number) => void;
}

const Fun: FunctionComponent<FunProps> = ({ fun, setFun }) => {
  const funOptions = ['divertente', 'noioso'];

  return (
    <div>
      <LabelIcon label="Quanto e' divertente?" />
      {funOptions.map((funOption, index) => {
        let funValue;

        if (index === 0) {
          funValue = 1;
        } else {
          funValue = 3;
        }

        return (
          <RadioButton
            isChecked={fun === index}
            key={index}
            label={funOption}
            type="fun"
            value={index}
            speed={funValue}
            setValue={setFun}
          />
        );
      })}
    </div>
  );
};

export default Fun;
