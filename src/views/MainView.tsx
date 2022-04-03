import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

// State
import { useAppSelector } from '../state/hooks';

// Components
import Button from '../components/core/Button';
import Headline from '../components/core/Headline';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import TasksTodo from '../components/TasksTodo';
import TasksDone from '../components/TasksDone';

// CopyText
import copyText from '../assets/copyText';

interface MainViewProps {
  showModal: boolean;
  showToast: boolean;
  setItemText: (event: string) => void;
  setEditIndex: (event: number) => void;
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  setModifyTask: (event: boolean) => void;
  setShowModal: (event: boolean) => void;
  setShowToast: (event: boolean) => void;
}

export const MainView: FunctionComponent<MainViewProps> = ({
  showModal,
  showToast,
  setEditIndex,
  setItemText,
  setSpeed,
  setUrgency,
  setFun,
  setModifyTask,
  setShowModal,
  setShowToast,
}) => {
  const { headline } = copyText.general;

  const tasks = useAppSelector((state) => state.task);
  const tasksCompleted = useAppSelector((state) =>
    state.task.map((task) => task.isCompleted),
  );

  const tasksTotal = tasks.length;
  const tasksDone = tasksCompleted.filter(Boolean).length;
  const tasksTodo = tasksTotal - tasksDone;

  return (
    <div className="MainView">
      <Headline
        className="MainView__headline"
        isFirstElement
        label={headline}
      />
      <TasksTodo
        className="MainView__tasksTodo"
        tasks={tasks}
        tasksTodo={tasksTodo}
        tasksTotal={tasksTotal}
        setItemText={setItemText}
        setSpeed={setSpeed}
        setUrgency={setUrgency}
        setFun={setFun}
        setEditIndex={setEditIndex}
        setModifyTask={setModifyTask}
        setShowModal={setShowModal}
      />
      <TasksDone
        className="MainView__tasksDone"
        tasks={tasks}
        tasksDone={tasksDone}
        tasksTotal={tasksTotal}
      />
      <Link to="add-edit" className="MainView__addButton">
        <Button plusSign type="button" />
      </Link>
      {showModal && (
        <Modal
          tasks={tasks}
          setShowModal={setShowModal}
          setShowToast={setShowToast}
        />
      )}
      {showToast && <Toast />}
    </div>
  );
};

export default MainView;
