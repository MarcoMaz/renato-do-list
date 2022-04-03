import { FunctionComponent } from 'react';

// Icons
import { FiChevronUp } from 'react-icons/fi';

// State
import { taskProps } from '../state/taskSlice';

// Components
import Headline from './core/Headline';
import Task from './Task';

// CopyText
import copyText from '../assets/copyText';

interface TasksDoneProps {
  className: string;
  tasksDone: number;
  tasksTotal: number;
  tasks: taskProps[];
}

const TasksDone: FunctionComponent<TasksDoneProps> = ({
  className,
  tasksDone,
  tasksTotal,
  tasks,
}) => {
  const { tasksDoneHeadline } = copyText.tasks;

  const counter = `${tasksDone}/${tasksTotal}`;

  const taskCounter = tasksTotal === 0 ? '(vuoto)' : `(${counter})`;

  return (
    <div className={className}>
      <div className="TasksDone__headlineWrapper">
        <Headline label={`${tasksDoneHeadline} ${taskCounter}`} />
        <FiChevronUp />
      </div>
      {tasksDone > 0 && (
        <ul className="TasksDone__tasksWrapper">
          {tasks
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
      )}
    </div>
  );
};

export default TasksDone;
