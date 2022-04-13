import { FunctionComponent, useState } from 'react';

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
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  setEditIndex: (event: number) => void;
  setItemText: (event: string) => void;
  setModifyTask: (event: boolean) => void;
  setShowModal: (event: boolean) => void;
}

const TasksDone: FunctionComponent<TasksDoneProps> = ({
  className,
  tasksDone,
  tasksTotal,
  tasks,
  setSpeed,
  setUrgency,
  setFun,
  setEditIndex,
  setItemText,
  setModifyTask,
  setShowModal,
}) => {
  const { tasksDoneHeadline } = copyText.tasks;

  const counter = `${tasksDone}/${tasksTotal}`;

  const taskCounter = tasksTotal === 0 ? '(vuoto)' : `(${counter})`;

  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const handleAccordion = () => {
    if (isAccordionOpen) {
      setIsAccordionOpen(false);
    } else {
      setIsAccordionOpen(true);
    }
  };

  return (
    <div className={`${className}${isAccordionOpen ? ' -open' : ''}`}>
      <button
        onClick={handleAccordion}
        type="button"
        className="TasksDone__headlineWrapper"
      >
        <Headline label={`${tasksDoneHeadline} ${taskCounter}`} />
        <FiChevronUp />
      </button>
      {tasksDone > 0 && (
        <ul className="TasksDone__tasksWrapper">
          {tasks
            .filter((task) => task.isCompleted)
            .map(({ id, label, isCompleted, speed, urgency, fun }) => (
              <Task
                key={id}
                isCompleted={isCompleted}
                id={id}
                label={label}
                speed={speed}
                urgency={urgency}
                fun={fun}
                setItemText={setItemText}
                setSpeed={setSpeed}
                setUrgency={setUrgency}
                setFun={setFun}
                setEditIndex={setEditIndex}
                setModifyTask={setModifyTask}
                setShowModal={setShowModal}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default TasksDone;
