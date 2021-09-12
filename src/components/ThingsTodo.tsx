import { FunctionComponent } from 'react';

import { ToDo } from '../state/toDoSlice';

import Task from './Task';

interface ThingsTodoProps {
  numberOfThingsTodo: number;
  numberOfThingsTotal: number;
  todos: ToDo[];
  urgency: number;
  fun: number;
}

const ThingsTodo: FunctionComponent<ThingsTodoProps> = ({
  numberOfThingsTodo,
  numberOfThingsTotal,
  todos,
}) => {
  return (
    <>
      <h2>
        Things to do{' '}
        <span>{`(${numberOfThingsTodo}/${numberOfThingsTotal})`}</span>
      </h2>
      <ul>
        {todos
          .filter((todo) => !todo.isCompleted)
          .sort((a, b) => a.total - b.total)
          .map(({ id, isCompleted, label }) => {
            return <Task id={id} isCompleted={isCompleted} label={label} />;
          })}
      </ul>
    </>
  );
};

export default ThingsTodo;
