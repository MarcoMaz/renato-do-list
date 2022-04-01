import { FunctionComponent } from 'react';

// State
import { taskProps } from '../state/taskSlice';

// Components
import Headline from './core/Headline';
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
