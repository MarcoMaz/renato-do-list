import { FunctionComponent } from 'react';

import RadioButton from './core/RadioButton';

interface FunProps {
  fun: number;
  setFun: (event: number) => void;
}

const Fun: FunctionComponent<FunProps> = ({ fun, setFun }) => {
  const funOptions = ['divertente', 'noioso'];

  return (
    <div>
      {funOptions.map((funOption, index) => (
        <RadioButton
          label={funOption}
          type="fun"
          value={index + 33}
          speed={fun}
          setSpeed={setFun}
        />
      ))}
    </div>
  );
};

export default Fun;
