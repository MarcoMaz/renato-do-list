import { FunctionComponent } from 'react';

// Router
import { Link } from 'react-router-dom';

// State
import { useAppDispatch } from '../state/hooks';
import { highlightTask, toggleTask } from '../state/taskSlice';

// Components
import Button from './core/Button';
import Checkbox from './core/Checkbox';

interface TaskProps {
  id: number;
  label: string;
  speed: number;
  urgency: number;
  fun: number;
  isCompleted: boolean;
  setSpeed: (event: number) => void;
  setUrgency: (event: number) => void;
  setFun: (event: number) => void;
  setEditIndex: (event: number) => void;
  setItemText: (event: string) => void;
  setModifyTask: (event: boolean) => void;
  setShowModal: (event: boolean) => void;
}

const Task: FunctionComponent<TaskProps> = ({
  id,
  label,
  speed,
  urgency,
  fun,
  isCompleted,
  setSpeed,
  setUrgency,
  setFun,
  setEditIndex,
  setItemText,
  setModifyTask,
  setShowModal,
}) => {
  const dispatch = useAppDispatch();

  const handleModifyTask = () => {
    setSpeed(speed);
    setUrgency(urgency);
    setFun(fun);
    setItemText(label);
    setEditIndex(id);
    setModifyTask(true);
  };

  const handleCompleteTask = () => {
    dispatch(toggleTask(id));
  };

  const handleRemoveDialog = () => {
    dispatch(highlightTask(id));
    if (setShowModal) setShowModal(true);
  };

  return (
    <li className="Task">
      <Checkbox
        label={label}
        value={id}
        isChecked={isCompleted}
        onChange={handleCompleteTask}
      />
      <div className="Task__buttons">
        <Link to="add-edit" className="Task__edit">
          <Button editSign type="button" onClick={handleModifyTask} />
        </Link>
        <Button
          className="Task__trash"
          trashSign
          type="button"
          onClick={handleRemoveDialog}
        />
      </div>
    </li>
  );
};

export default Task;
