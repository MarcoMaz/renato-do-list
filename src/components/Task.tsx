import { FunctionComponent } from 'react';
import { useAppDispatch } from '../state/hooks';

import { toggleTask } from '../state/taskSlice';

import Checkbox from './core/Checkbox';

interface TaskProps {
  isCompleted: boolean;
  id: number;
  label: string;
  setShowAddTask?: (event: boolean) => void;
}

const Task: FunctionComponent<TaskProps> = ({
  isCompleted,
  id,
  label,
  setShowAddTask,
}) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <button
        type="button"
        onClick={() => (setShowAddTask ? setShowAddTask(true) : null)}
      >
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
