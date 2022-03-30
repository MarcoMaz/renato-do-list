import { FunctionComponent } from 'react';
import { useAppDispatch } from '../state/hooks';

import { addTask, editTask } from '../state/taskSlice';

import Button from './core/Button';
import InputText from './core/InputText';

import Speed from './Speed';
// import Urgency from './Urgency';
// import Fun from './Fun';

interface AddTaskProps {
  editIndex: number;
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
  editIndex,
  itemText,
  speed,
  urgency,
  fun,
  setItemText,
  setShowCreateNew,
  setSpeed,
  // setUrgency,
  // setFun,
}) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      addTask({
        label: itemText,
        speed,
        urgency,
        fun,
      }),
    );
    setItemText('');
    setShowCreateNew(false);
  };

  const handleClick = () => {
    dispatch(editTask({ index: editIndex, label: itemText }));
    setShowCreateNew(false);
  };

  const handleChange = (e: { target: { value: string } }) => {
    setItemText(e.target.value);
  };

  return (
    <form className="AddTask" onSubmit={onSubmit}>
      <Button
        type="button"
        label="<--- lista"
        onClick={() => setShowCreateNew(false)}
      />
      <Button type="submit" label="fatto" isDisabled={!itemText} />
      <h1>SPEED...{speed}</h1>
      <input type="text" onChange={handleChange} value={itemText} />
      <button type="button" onClick={handleClick}>
        Edit an entry
      </button>
      <h2>Aggiungi un&apos; attivita&apos;</h2>
      <InputText
        itemText={itemText}
        setItemText={setItemText}
        placeholder="Cosa devi fare? Scrivilo qui"
      />
      <Speed speed={speed} setSpeed={setSpeed} />
      {/* <Urgency urgency={urgency} setUrgency={setUrgency} />
      <Fun fun={fun} setFun={setFun} /> */}
    </form>
  );
};

export default AddTask;
