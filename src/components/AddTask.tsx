import { FunctionComponent } from 'react';
import { useAppDispatch } from '../state/hooks';

import { addTodo } from '../state/toDoSlice';

import Button from './core/Button';
import InputText from './core/InputText';

import Speed from './Speed';
import Urgency from './Urgency';
import Fun from './Fun';

interface AddTaskProps {
  itemText: string;
  speed: number;
  urgency: number;
  fun: number;
  setItemText: (event: string) => void;
  setShowCreateNew: (event: boolean) => void;
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
}

const AddTask: FunctionComponent<AddTaskProps> = ({
  itemText,
  speed,
  urgency,
  fun,
  setItemText,
  setShowCreateNew,
  setSpeed,
  setUrgency,
  setFun,
}) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      addTodo({
        label: itemText,
        speed,
        urgency,
        fun,
      }),
    );
    setItemText('');
    setShowCreateNew(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <InputText
        itemText={itemText}
        setItemText={setItemText}
        placeholder="Add Todo"
      />
      <Button type="submit" label="Submit" />
      <Speed speed={speed} setSpeed={setSpeed} />
      <Urgency urgency={urgency} setUrgency={setUrgency} />
      <Fun fun={fun} setFun={setFun} />
      <Button
        type="button"
        label="Click me if you change your mind"
        onClick={() => setShowCreateNew(false)}
      />
    </form>
  );
};

export default AddTask;
