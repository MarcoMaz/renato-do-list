import { FunctionComponent, useState } from 'react';

// State
import { useAppSelector } from '../state/hooks';

// Components
import Button from '../components/core/Button';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import TasksTodo from '../components/TasksTodo';
import TasksDone from '../components/TasksDone';
import AddEditTask from '../components/AddEditTask';

export const MainView: FunctionComponent = () => {
  const tasks = useAppSelector((state) => state.task);
  const tasksCompleted = useAppSelector((state) =>
    state.task.map((task) => task.isCompleted),
  );

  const tasksTotal = tasks.length;
  const tasksDone = tasksCompleted.filter(Boolean).length;
  const tasksTodo = tasksTotal - tasksDone;

  const [itemText, setItemText] = useState('');
  const [speed, setSpeed] = useState(30);
  const [urgency, setUrgency] = useState(50);
  const [fun, setFun] = useState(11);
  const [editIndex, setEditIndex] = useState(0);
  const [showAddEditTask, setShowAddEditTask] = useState(false);
  const [modifyTask, setModifyTask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <TasksTodo
        tasks={tasks}
        tasksTodo={tasksTodo}
        tasksTotal={tasksTotal}
        setItemText={setItemText}
        setSpeed={setSpeed}
        setUrgency={setUrgency}
        setFun={setFun}
        setEditIndex={setEditIndex}
        setShowAddEditTask={setShowAddEditTask}
        setModifyTask={setModifyTask}
        setShowModal={setShowModal}
      />
      <TasksDone tasks={tasks} tasksDone={tasksDone} tasksTotal={tasksTotal} />
      {!showAddEditTask && (
        <Button
          type="button"
          label="+"
          onClick={() => setShowAddEditTask(true)}
        />
      )}
      {showAddEditTask && (
        <AddEditTask
          itemText={itemText}
          speed={speed}
          urgency={urgency}
          fun={fun}
          editIndex={editIndex}
          modifyTask={modifyTask}
          setItemText={setItemText}
          setSpeed={setSpeed}
          setUrgency={setUrgency}
          setFun={setFun}
          setShowAddEditTask={setShowAddEditTask}
          setModifyTask={setModifyTask}
        />
      )}
      {showModal && (
        <Modal
          label="Are you sure?"
          tasks={tasks}
          setShowModal={setShowModal}
          setShowToast={setShowToast}
        />
      )}
      {showToast && <Toast label="an item was removed" />}
    </div>
  );
};

export default MainView;
