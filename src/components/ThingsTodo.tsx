import { FunctionComponent } from 'react';

import { taskProps } from '../state/taskSlice';

import Task from './Task';

interface ThingsTodoProps {
  numberOfThingsTodo: number;
  numberOfThingsTotal: number;
  tasks: taskProps[];
}

const ThingsTodo: FunctionComponent<ThingsTodoProps> = ({
  numberOfThingsTodo,
  numberOfThingsTotal,
  tasks,
}) => {
  const counter = `${numberOfThingsTodo}/${numberOfThingsTotal}`;

  const taskCounter = numberOfThingsTotal === 0 ? '(vuota)' : `(${counter})`;

  return (
    <>
      <h2>Things to do </h2>
      <h3>{taskCounter}</h3>
      <ul>
        {tasks
          .filter((task) => !task.isCompleted)
          .sort((a, b) => b.total - a.total)
          .map(({ id, isCompleted, label }) => {
            return (
              <Task key={id} id={id} isCompleted={isCompleted} label={label} />
            );
          })}
      </ul>
    </>
  );
};

export default ThingsTodo;