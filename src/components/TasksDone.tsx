import { FunctionComponent } from 'react';

// State
import { taskProps } from '../state/taskSlice';

// Components
import Headline from './core/Headline';
import Task from './Task';

// CopyText
import copyText from '../assets/copyText';

interface TasksDoneProps {
  tasksDone: number;
  tasksTotal: number;
  tasks: taskProps[];
}

const TasksDone: FunctionComponent<TasksDoneProps> = ({
  tasksDone,
  tasksTotal,
  tasks,
}) => {
  const { tasksDoneHeadline } = copyText.tasks;

  const counter = `${tasksDone}/${tasksTotal}`;

  const taskCounter = tasksTotal === 0 ? '(vuoto)' : `(${counter})`;

  return (
    <>
      <Headline label={`${tasksDoneHeadline} ${taskCounter}`} />
      <ul>
        {tasks &&
          tasks
            .filter((task) => task.isCompleted)
            .map(({ label, isCompleted }, index) => (
              <Task
                key={index}
                isCompleted={isCompleted}
                id={index}
                label={label}
              />
            ))}
      </ul>
    </>
  );
};

export default TasksDone;