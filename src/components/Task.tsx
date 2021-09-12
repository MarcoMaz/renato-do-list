import { FunctionComponent } from 'react';
import { useAppDispatch } from '../state/hooks';

import { toggleTodo } from '../state/toDoSlice';

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
      <Checkbox
        id={id}
        isCompleted={isCompleted}
        label={label}
        onChange={() => dispatch(toggleTodo(id))}
      />
    </li>
  );
};

export default Task;
