import { FunctionComponent } from 'react';

// State
import { useAppDispatch } from '../state/hooks';
import { addTask, editTask } from '../state/taskSlice';

// Components
import Button from './core/Button';
import Headline from './core/Headline';
import InputText from './core/InputText';
import Speed from './Speed';
import Urgency from './Urgency';
import Fun from './Fun';

interface AddTaskProps {
  editIndex: number;
  itemText: string;
  speed: number;
  urgency: number;
  fun: number;
  modifyTask: boolean;
  setItemText: (event: string) => void;
  setShowCreateNew: (event: boolean) => void;
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  setModifyTask: (event: boolean) => void;
}

const AddTask: FunctionComponent<AddTaskProps> = ({
  editIndex,
  itemText,
  speed,
  urgency,
  fun,
  modifyTask,
  setItemText,
  setShowCreateNew,
  setSpeed,
  setUrgency,
  setFun,
  setModifyTask,
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
    setSpeed(30);
    setUrgency(50);
    setFun(11);
    setShowCreateNew(false);
    setModifyTask(false);
  };

  const handleClick = () => {
    dispatch(
      editTask({ index: editIndex, label: itemText, speed, urgency, fun }),
    );
    setItemText('');
    setShowCreateNew(false);
    setModifyTask(false);
  };

  const handleChange = (e: { target: { value: string } }) => {
    setItemText(e.target.value);
  };

  const goBack = () => {
    setSpeed(30);
    setUrgency(50);
    setFun(11);
    setItemText('');
    setShowCreateNew(false);
    setModifyTask(false);
  };

  const handleInputChange = (event: { target: { value: string } }) => {
    setItemText(event.target.value);
  };

  return (
    <form className="AddTask" onSubmit={onSubmit}>
      <Button type="button" label="<--- lista" onClick={goBack} />
      {!modifyTask ? (
        <Button type="submit" label="fatto" isDisabled={!itemText} />
      ) : (
        <Button type="button" label="Edit an entry" onClick={handleClick} />
      )}
      {!modifyTask ? (
        <>
          <Headline label="Aggiungi un' attivita'" />
          <InputText
            value={itemText}
            placeholder="Cosa devi fare? Scrivilo qui"
            onChange={handleInputChange}
          />
        </>
      ) : (
        <InputText value={itemText} onChange={handleChange} />
      )}
      <Speed speed={speed} setSpeed={setSpeed} />
      <Urgency urgency={urgency} setUrgency={setUrgency} />
      <Fun fun={fun} setFun={setFun} />
    </form>
  );
};

export default AddTask;
