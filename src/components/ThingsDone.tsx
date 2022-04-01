import { FunctionComponent } from 'react';

// State
import { taskProps } from '../state/taskSlice';

// Components
import Headline from './core/Headline';
import Task from './Task';

interface ThingsDoneProps {
  tasksDone: number;
  tasksTotal: number;
  tasks: taskProps[];
}

const ThingsDone: FunctionComponent<ThingsDoneProps> = ({
  tasksDone,
  tasksTotal,
  tasks,
}) => {
  const counter = `${tasksDone}/${tasksTotal}`;

  const taskCounter = tasksTotal === 0 ? '(vuota)' : `(${counter})`;

  return (
    <>
      <Headline label={`Things done ${taskCounter}`} />
      <ul>
        {tasks
          .filter((task) => task.isCompleted)
          .map((task, index) => (
            <Task
              key={index}
              isCompleted={task.isCompleted}
              id={index}
              label={task.label}
            />
          ))}
      </ul>
    </>
  );
};

export default ThingsDone;
