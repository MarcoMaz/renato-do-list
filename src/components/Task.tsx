import { FunctionComponent } from 'react';

// State
import { useAppDispatch } from '../state/hooks';
import { highlightTask, toggleTask } from '../state/taskSlice';

// Components
import Button from './core/Button';
import Checkbox from './core/Checkbox';

interface TaskProps {
  isCompleted: boolean;
  id: number;
  label: string;
  speed?: number;
  setSpeed?: (event: number) => void;
  urgency?: number;
  setUrgency?: (event: number) => void;
  fun?: number;
  setFun?: (event: number) => void;
  setEditIndex?: (event: number) => void;
  setShowAddEditTask?: (event: boolean) => void;
  setItemText?: (event: string) => void;
  setModifyTask?: (event: boolean) => void;
  setShowModal?: (event: boolean) => void;
}

const Task: FunctionComponent<TaskProps> = ({
  isCompleted,
  id,
  label,
  speed,
  setSpeed,
  urgency,
  setUrgency,
  fun,
  setFun,
  setEditIndex,
  setShowAddEditTask,
  setItemText,
  setModifyTask,
  setShowModal,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (setShowAddEditTask) {
      setShowAddEditTask(true);
    }
    if (setItemText) {
      setItemText(label);
    }
    if (setEditIndex) {
      setEditIndex(id);
    }
    if (speed && setSpeed) {
      setSpeed(speed);
    }
    if (urgency && setUrgency) {
      setUrgency(urgency);
    }
    if (fun && setFun) {
      setFun(fun);
    }
    if (setModifyTask) {
      setModifyTask(true);
    }
  };

  const handleCheckbox = () => {
    dispatch(toggleTask(id));
    if (setShowAddEditTask) {
      setShowAddEditTask(false);
    }
  };

  const handleRemoveDialog = () => {
    if (setShowModal) {
      setShowModal(true);
    }
    dispatch(highlightTask(id));
  };

  return (
    <li>
      <button type="button" onClick={handleClick}>
        <Checkbox
          value={id}
          isChecked={isCompleted}
          label={label}
          onChange={handleCheckbox}
        />
      </button>
      <Button label="X" type="button" onClick={handleRemoveDialog} />
    </li>
  );
};

export default Task;
