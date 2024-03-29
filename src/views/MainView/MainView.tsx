/* eslint-disable no-unused-expressions */
import { FunctionComponent, useEffect } from 'react';

// Router
import { Link } from 'react-router-dom';

// State
import { useAppSelector } from '../../state/hooks';

// Components
import Button from '../../components/core/Button';
import Headline from '../../components/core/Headline';
import Dialog from '../../components/Dialog';
import Modal from '../../components/Modal';
import Toast from '../../components/Toast';
import Taaac from '../../components/Taaac';
import TasksTodo from '../../components/TasksTodo';
import TasksDone from '../../components/TasksDone';

// CopyText
import copyText from '../../assets/copyText';

interface MainViewProps {
  showModal: boolean;
  showToast: boolean;
  showTaaac: boolean;
  setItemText: (event: string) => void;
  setEditIndex: (event: number) => void;
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  setModifyTask: (event: boolean) => void;
  setShowModal: (event: boolean) => void;
  setShowToast: (event: boolean) => void;
  setShowTaaac: (event: boolean) => void;
}

export const MainView: FunctionComponent<MainViewProps> = ({
  showModal,
  showToast,
  showTaaac,
  setEditIndex,
  setItemText,
  setSpeed,
  setUrgency,
  setFun,
  setModifyTask,
  setShowModal,
  setShowToast,
  setShowTaaac,
}) => {
  const { headline } = copyText.general;

  const tasks = useAppSelector((state) => state.task);
  const tasksCompleted = useAppSelector((state) =>
    state.task.map((task) => task.isCompleted),
  );

  const tasksTotal = tasks.length;
  const tasksDone = tasksCompleted.filter(Boolean).length;
  const tasksTodo = tasksTotal - tasksDone;

  useEffect(() => {
    const bodyElement = document.querySelector('body');

    if (bodyElement) {
      showModal === true
        ? bodyElement.classList.add('blocked')
        : bodyElement.classList.remove('blocked');
    }
  });

  return (
    <div className="MainView">
      {showModal && <Modal />}
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
        setShowToast={setShowToast}
        setShowTaaac={setShowTaaac}
      />
      <TasksDone
        className="MainView__tasksDone"
        tasks={tasks}
        tasksDone={tasksDone}
        tasksTotal={tasksTotal}
        setItemText={setItemText}
        setSpeed={setSpeed}
        setUrgency={setUrgency}
        setFun={setFun}
        setEditIndex={setEditIndex}
        setModifyTask={setModifyTask}
        setShowModal={setShowModal}
      />
      <Link to="add-edit" className="MainView__addButton">
        <Button plusSign type="button" />
      </Link>
      {showModal && (
        <Dialog
          tasks={tasks}
          setShowModal={setShowModal}
          setShowToast={setShowToast}
        />
      )}
      {showToast && <Toast />}
      {showTaaac && <Taaac />}
    </div>
  );
};

export default MainView;
