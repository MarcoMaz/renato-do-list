import { FunctionComponent } from 'react';
import { useAppDispatch } from '../state/hooks';

import { toggleTask } from '../state/taskSlice';

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
  setShowAddTask?: (event: boolean) => void;
  setItemText?: (event: string) => void;
  setModifyTask?: (event: boolean) => void;
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
  setShowAddTask,
  setItemText,
  setModifyTask,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (setShowAddTask) {
      setShowAddTask(true);
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
    if (setShowAddTask) {
      setShowAddTask(false);
    }
  };

  return (
    <li>
      <button type="button" onClick={handleClick}>
        <Checkbox
          id={id}
          isCompleted={isCompleted}
          label={label}
          onChange={handleCheckbox}
        />
      </button>
      <strong>speed is {speed}</strong> ||
      <strong> urgency is {urgency}</strong> ||
      <strong> fun is {fun}</strong>
    </li>
  );
};

export default Task;
