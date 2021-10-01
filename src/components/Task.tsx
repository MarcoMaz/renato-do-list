import { FunctionComponent } from 'react';
import { useAppDispatch } from '../state/hooks';

import { toggleTask } from '../state/taskSlice';

import Checkbox from './core/Checkbox';

interface TaskProps {
  isCompleted: boolean;
  id: number;
  label: string;
}

const Task: FunctionComponent<TaskProps> = ({ isCompleted, id, label }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <button type="button">
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
