import { FunctionComponent } from 'react';
import { ToDo } from '../state/toDoSlice';

import Task from './Task';

interface ThingsDoneProps {
  numberOfThingsDone: number;
  numberOfThingsTotal: number;
  todos: ToDo[];
}

const ThingsDone: FunctionComponent<ThingsDoneProps> = ({
  numberOfThingsDone,
  numberOfThingsTotal,
  todos,
}) => {
  return (
    <>
      <h2>
        Things done{' '}
        <span>{`(${numberOfThingsDone}/${numberOfThingsTotal})`}</span>
      </h2>
      <ul>
        {todos
          .filter((todo) => todo.isCompleted)
          .map((todo, index) => (
            <Task
              isCompleted={todo.isCompleted}
              id={index}
              label={todo.label}
            />
          ))}
      </ul>
    </>
  );
};

export default ThingsDone;
