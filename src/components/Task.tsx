import { FunctionComponent } from 'react';
import { useAppDispatch } from '../state/hooks';

import { toggleTask } from '../state/taskSlice';

import Checkbox from './core/Checkbox';

interface TaskProps {
  isCompleted: boolean;
  id: number;
  label: string;
  setEditIndex?: (event: number) => void;
  setShowAddTask?: (event: boolean) => void;
  setEditingText?: (event: string) => void;
}

const Task: FunctionComponent<TaskProps> = ({
  isCompleted,
  id,
  label,
  setEditIndex,
  setShowAddTask,
  setEditingText,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (setShowAddTask) {
      setShowAddTask(true);
    }
    if (setEditingText) {
      setEditingText(label);
    }
    if (setEditIndex) {
      setEditIndex(id);
    }
  };

  return (
    <li>
      <button type="button" onClick={handleClick}>
        <Checkbox
          id={id}
          isCompleted={isCompleted}
          label={label}
          onChange={() => dispatch(toggleTask(id))}
        />
      </button>
    </li>
  );
};

export default Task;
