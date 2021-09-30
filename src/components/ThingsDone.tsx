import { FunctionComponent } from 'react';
import { taskProps } from '../state/taskSlice';

import Task from './Task';

interface ThingsDoneProps {
  numberOfThingsDone: number;
  numberOfThingsTotal: number;
  tasks: taskProps[];
}

const ThingsDone: FunctionComponent<ThingsDoneProps> = ({
  numberOfThingsDone,
  numberOfThingsTotal,
  tasks,
}) => {
  const counter = `${numberOfThingsDone}/${numberOfThingsTotal}`;

  const taskCounter = numberOfThingsTotal === 0 ? '(vuota)' : `(${counter})`;

  return (
    <>
      <h2>Things done</h2>
      <h3>{taskCounter}</h3>
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
