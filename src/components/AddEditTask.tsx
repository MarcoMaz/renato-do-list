/* eslint-disable @typescript-eslint/no-explicit-any */
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

// CopyText
import copyText from '../assets/copyText';

interface AddEditTaskProps {
  itemText: string;
  speed: number;
  urgency: number;
  fun: number;
  editIndex: number;
  modifyTask: boolean;
  setItemText: (event: string) => void;
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  setShowAddEditTask: (event: boolean) => void;
  setModifyTask: (event: boolean) => void;
}

const AddEditTask: FunctionComponent<AddEditTaskProps> = ({
  itemText,
  speed,
  urgency,
  fun,
  editIndex,
  modifyTask,
  setItemText,
  setSpeed,
  setUrgency,
  setFun,
  setShowAddEditTask,
  setModifyTask,
}) => {
  const { buttonGoBack, buttonDone, headline, placeHolder } =
    copyText.addEditTask;

  const dispatch = useAppDispatch();

  // New Task
  const handleAddNewTask = (event: { target: { value: string } }) => {
    setItemText(event.target.value);
  };

  const submitNewTask = (event: any) => {
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
    setSpeed(1);
    setUrgency(1);
    setFun(1);
    setShowAddEditTask(false);
    setModifyTask(false);
  };

  // Modify Task
  const handleModifyTask = (e: { target: { value: string } }) => {
    setItemText(e.target.value);
  };

  const submitModfiyTask = () => {
    dispatch(
      editTask({ index: editIndex, label: itemText, speed, urgency, fun }),
    );
    setItemText('');
    setShowAddEditTask(false);
    setModifyTask(false);
  };

  // Go Back
  const handleGoBack = () => {
    setSpeed(1);
    setUrgency(1);
    setFun(1);
    setItemText('');
    setShowAddEditTask(false);
    setModifyTask(false);
  };

  return (
    <form className="AddTask" onSubmit={submitNewTask}>
      <Button
        arrowLeft
        type="button"
        label={buttonGoBack}
        onClick={handleGoBack}
      />
      {!modifyTask ? (
        <Button type="submit" label={buttonDone} isDisabled={!itemText} />
      ) : (
        <Button type="button" label={buttonDone} onClick={submitModfiyTask} />
      )}
      {!modifyTask ? (
        <>
          <Headline label={headline} />
          <InputText
            value={itemText}
            placeholder={placeHolder}
            onChange={handleAddNewTask}
          />
        </>
      ) : (
        <InputText value={itemText} onChange={handleModifyTask} />
      )}
      <Speed speed={speed} setSpeed={setSpeed} />
      <Urgency urgency={urgency} setUrgency={setUrgency} />
      <Fun fun={fun} setFun={setFun} />
    </form>
  );
};

export default AddEditTask;
