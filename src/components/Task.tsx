import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

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
  setItemText,
  setModifyTask,
  setShowModal,
}) => {
  const dispatch = useAppDispatch();

  const handleModifyTask = () => {
    if (speed && setSpeed) setSpeed(speed);
    if (urgency && setUrgency) setUrgency(urgency);
    if (fun && setFun) setFun(fun);
    if (setItemText) setItemText(label);
    if (setEditIndex) setEditIndex(id);
    if (setModifyTask) setModifyTask(true);
  };

  const handleCompleteTask = () => {
    dispatch(toggleTask(id));
  };

  const handleRemoveDialog = () => {
    dispatch(highlightTask(id));
    if (setShowModal) setShowModal(true);
  };

  return (
    <li>
      <Checkbox
        value={id}
        isChecked={isCompleted}
        onChange={handleCompleteTask}
      />
      <Link to="add-edit">
        <Button type="button" label={label} onClick={handleModifyTask} />
      </Link>
      <Button trashSign type="button" onClick={handleRemoveDialog} />
    </li>
  );
};

export default Task;
