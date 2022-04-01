import { FunctionComponent } from 'react';

// State
import { useAppDispatch } from '../state/hooks';
import { highlightTask, toggleTask } from '../state/taskSlice';

// Components
import Button from './core/Button';
import Checkbox from './core/Checkbox';

interface TaskProps {
  id: number;
  label: string;
  speed?: number;
  urgency?: number;
  fun?: number;
  isCompleted: boolean;
  setSpeed?: (event: number) => void;
  setUrgency?: (event: number) => void;
  setFun?: (event: number) => void;
  setEditIndex?: (event: number) => void;
  setShowAddEditTask?: (event: boolean) => void;
  setItemText?: (event: string) => void;
  setModifyTask?: (event: boolean) => void;
  setShowModal?: (event: boolean) => void;
}

const Task: FunctionComponent<TaskProps> = ({
  id,
  label,
  speed,
  urgency,
  fun,
  isCompleted,
  setSpeed,
  setUrgency,
  setFun,
  setEditIndex,
  setShowAddEditTask,
  setItemText,
  setModifyTask,
  setShowModal,
}) => {
  const dispatch = useAppDispatch();

  const handleModifyTask = () => {
    if (speed && setSpeed) setSpeed(speed);
    if (urgency && setUrgency) setUrgency(urgency);
    if (fun && setFun) setFun(fun);
    if (setShowAddEditTask) setShowAddEditTask(true);
    if (setItemText) setItemText(label);
    if (setEditIndex) setEditIndex(id);
    if (setModifyTask) setModifyTask(true);
  };

  const handleCompleteTask = () => {
    dispatch(toggleTask(id));
    if (setShowAddEditTask) setShowAddEditTask(false);
  };

  const handleRemoveDialog = () => {
    dispatch(highlightTask(id));
    if (setShowModal) setShowModal(true);
  };

  return (
    <li>
      <button type="button" onClick={handleModifyTask}>
        <Checkbox
          value={id}
          isChecked={isCompleted}
          label={label}
          onChange={handleCompleteTask}
        />
      </button>
      <Button label="X" type="button" onClick={handleRemoveDialog} />
    </li>
  );
};

export default Task;
