import { FunctionComponent, useState } from 'react';

// State
import { useAppSelector } from '../state/hooks';

// Components
import Button from '../components/core/Button';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import ThingsTodo from '../components/ThingsTodo';
import ThingsDone from '../components/ThingsDone';
import AddTask from '../components/AddTask';

export const MainView: FunctionComponent = () => {
  const tasks = useAppSelector((state) => state.task);
  const tasksCompleted = useAppSelector((state) =>
    state.task.map((task) => task.isCompleted),
  );

  const tasksTotal = tasks.length;
  const tasksDone = tasksCompleted.filter(Boolean).length;
  const tasksTodo = tasksTotal - tasksDone;

  const [newItemText, setItemText] = useState('');
  const [newSpeed, setSpeed] = useState(30);
  const [newUrgency, setUrgency] = useState(50);
  const [newFun, setFun] = useState(11);
  const [editIndex, setEditIndex] = useState(0);
  const [showAddTask, setShowAddTask] = useState(false);
  const [modifyTask, setModifyTask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <ThingsTodo
        tasks={tasks}
        tasksTodo={tasksTodo}
        tasksTotal={tasksTotal}
        setSpeed={setSpeed}
        setUrgency={setUrgency}
        setFun={setFun}
        setEditIndex={setEditIndex}
        setShowAddTask={setShowAddTask}
        setItemText={setItemText}
        setModifyTask={setModifyTask}
        setShowModal={setShowModal}
      />
      <ThingsDone tasks={tasks} tasksDone={tasksDone} tasksTotal={tasksTotal} />
      {!showAddTask && (
        <Button type="button" label="+" onClick={() => setShowAddTask(true)} />
      )}
      {showAddTask && (
        <AddTask
          editIndex={editIndex}
          itemText={newItemText}
          speed={newSpeed}
          urgency={newUrgency}
          fun={newFun}
          setItemText={setItemText}
          setShowCreateNew={setShowAddTask}
          setSpeed={setSpeed}
          setUrgency={setUrgency}
          setFun={setFun}
          modifyTask={modifyTask}
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
