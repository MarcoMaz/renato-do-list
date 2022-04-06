/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

// State
import { useAppDispatch } from '../state/hooks';
import { addTask, editTask } from '../state/taskSlice';

// Components
import Button from '../components/core/Button';
import Headline from '../components/core/Headline';
import InputText from '../components/core/InputText';
import Speed from '../components/Speed';
import Urgency from '../components/Urgency';
import Fun from '../components/Fun';

// CopyText
import copyText from '../assets/copyText';

interface AddEditViewProps {
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
  setModifyTask: (event: boolean) => void;
}

const AddEditView: FunctionComponent<AddEditViewProps> = ({
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
  setModifyTask,
}) => {
  const { buttonGoBack, buttonDone, headline, placeHolder } =
    copyText.addEditTask;

  const dispatch = useAppDispatch();

  // New Task
  const handleAddNewTask = (event: { target: { value: string } }) => {
    setItemText(event.target.value);
  };

  const submitNewTask = () => {
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
    setModifyTask(false);
  };

  // Go Back
  const handleGoBack = () => {
    setSpeed(1);
    setUrgency(1);
    setFun(1);
    setItemText('');
    setModifyTask(false);
  };

  return (
    <form className="AddTask">
      <div className="AddTask__buttons">
        <Link to="/main" className="AddTask__goBack">
          <Button
            arrowLeft
            type="button"
            label={buttonGoBack}
            onClick={handleGoBack}
          />
        </Link>
        {!modifyTask ? (
          <Link to="/main" className="AddTask__confirm">
            <Button
              type="submit"
              label={buttonDone}
              isDisabled={!itemText}
              onClick={submitNewTask}
            />
          </Link>
        ) : (
          <Link to="/main" className="AddTask__confirm">
            <Button
              type="button"
              label={buttonDone}
              onClick={submitModfiyTask}
            />
          </Link>
        )}
      </div>
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

export default AddEditView;
