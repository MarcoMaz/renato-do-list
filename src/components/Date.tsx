import { FunctionComponent } from 'react';

interface DateProps {
  itemDate: string;
  setItemDate: (event: string) => void;
}

const Date: FunctionComponent<DateProps> = ({ itemDate, setItemDate }) => {
  return (
    <input
      type="date"
      id="start"
      name="trip-start"
      value={itemDate}
      onChange={(event) => setItemDate(event.target.value)}
      min="2020-01-01"
      max="2030-12-31"
    />
  );
};

export default Date;
