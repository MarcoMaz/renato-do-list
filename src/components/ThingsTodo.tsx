import { FunctionComponent } from 'react';

// State
import { taskProps } from '../state/taskSlice';

// Components
import Headline from './core/Headline';
import Task from './Task';

interface ThingsTodoProps {
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  tasksTodo: number;
  tasksTotal: number;
  setEditIndex: (event: number) => void;
  tasks: taskProps[];
  setShowAddEditTask: (event: boolean) => void;
  setItemText: (event: string) => void;
  setModifyTask: (event: boolean) => void;
  setShowModal: (event: boolean) => void;
}

const ThingsTodo: FunctionComponent<ThingsTodoProps> = ({
  setSpeed,
  setUrgency,
  setFun,
  tasksTodo,
  tasksTotal,
  tasks,
  setEditIndex,
  setShowAddEditTask,
  setItemText,
  setModifyTask,
  setShowModal,
}) => {
  const counter = `${tasksTodo}/${tasksTotal}`;

  const taskCounter = tasksTotal === 0 ? '(vuota)' : `(${counter})`;

  return (
    <>
      <Headline label={`Things to do ${taskCounter}`} />
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
                setShowAddEditTask={setShowAddEditTask}
                setItemText={setItemText}
                setModifyTask={setModifyTask}
                setShowModal={setShowModal}
              />
            );
          })}
      </ul>
    </>
  );
};

export default ThingsTodo;
