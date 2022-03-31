import { FunctionComponent } from 'react';

import { taskProps } from '../state/taskSlice';

import Task from './Task';

interface ThingsTodoProps {
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  numberOfThingsTodo: number;
  numberOfThingsTotal: number;
  setEditIndex: (event: number) => void;
  tasks: taskProps[];
  setShowAddTask: (event: boolean) => void;
  setItemText: (event: string) => void;
  setModifyTask: (event: boolean) => void;
}

const ThingsTodo: FunctionComponent<ThingsTodoProps> = ({
  setSpeed,
  setUrgency,
  setFun,
  numberOfThingsTodo,
  numberOfThingsTotal,
  tasks,
  setEditIndex,
  setShowAddTask,
  setItemText,
  setModifyTask,
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
          .map(({ id, isCompleted, label, speed, urgency, fun }) => {
            return (
              <Task
                speed={speed}
                setSpeed={setSpeed}
                urgency={urgency}
                setUrgency={setUrgency}
                fun={fun}
                setFun={setFun}
                key={id}
                setEditIndex={setEditIndex}
                id={id}
                isCompleted={isCompleted}
                label={label}
                setShowAddTask={setShowAddTask}
                setItemText={setItemText}
                setModifyTask={setModifyTask}
              />
            );
          })}
      </ul>
    </>
  );
};

export default ThingsTodo;
