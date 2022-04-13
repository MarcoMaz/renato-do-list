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

interface TasksTodoProps {
  className: string;
  tasks: taskProps[];
  tasksTotal: number;
  tasksTodo: number;
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  setEditIndex: (event: number) => void;
  setItemText: (event: string) => void;
  setModifyTask: (event: boolean) => void;
  setShowModal: (event: boolean) => void;
}

const TasksTodo: FunctionComponent<TasksTodoProps> = ({
  className,
  tasks,
  tasksTotal,
  tasksTodo,
  setSpeed,
  setUrgency,
  setFun,
  setEditIndex,
  setItemText,
  setModifyTask,
  setShowModal,
}) => {
  const { tasksTodoHeadline } = copyText.tasks;

  const counter = `${tasksTodo}/${tasksTotal}`;

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
        className="TasksTodo__headlineWrapper"
      >
        <Headline label={`${tasksTodoHeadline} ${taskCounter}`} />
        <FiChevronUp />
      </button>
      {tasksTodo > 0 && (
        <ul className="TasksTodo__tasksWrapper">
          {tasks
            .filter((task) => !task.isCompleted)
            .sort((a, b) => b.total - a.total)
            .map(({ id, label, isCompleted, speed, urgency, fun }) => {
              return (
                <Task
                  key={id}
                  id={id}
                  label={label}
                  isCompleted={isCompleted}
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
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default TasksTodo;
