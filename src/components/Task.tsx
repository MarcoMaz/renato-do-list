/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FunctionComponent, useEffect, useRef, useState } from 'react';

// import ICONS
import { FiCheckCircle } from 'react-icons/fi';

// Router
import { Link } from 'react-router-dom';

// State
import { useAppDispatch } from '../state/hooks';
import { highlightTask, toggleTask } from '../state/taskSlice';

// Components
import Button from './core/Button';
import Checkbox from './core/Checkbox';
import taaacSound from '../assets/sounds/taaac.mp3';

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

  const [clicked, setClicked] = useState(false);
  const [clickDragPosition, setClickDragPosition] = useState(0);
  const [positionInitialClick, setPositionInitialClick] = useState(0);
  const [positionFinalClick, setPositionFinalClick] = useState(0);
  const refTaskItself = useRef<HTMLDivElement>(null);

  const taskItselfStyling = clickDragPosition !== 0 ? '-isMoving' : '';

  const THRESHOLD_LEFT = -500;
  const THRESHOLD_RIGHT = 200;

  let distanceBetweenClicks;

  useEffect(() => {
    distanceBetweenClicks = positionFinalClick - positionInitialClick;

    if (refTaskItself.current) {
      refTaskItself.current.style.transform = `translateX(${clickDragPosition}px`;
    }

    if (
      distanceBetweenClicks > THRESHOLD_RIGHT ||
      distanceBetweenClicks < THRESHOLD_LEFT
    ) {
      dispatch(toggleTask(id));
    }
  }, [
    clickDragPosition,
    positionInitialClick,
    positionFinalClick,
    distanceBetweenClicks,
  ]);

  const onMouseMove = (event: any) => {
    if (!isCompleted && clicked) {
      setClickDragPosition(clickDragPosition + event.movementX / 2);
    }
  };

  const onMouseDown = (e: any) => {
    if (!isCompleted) {
      const clickedElement = e.target.getBoundingClientRect();
      const firstClickPosition = e.clientX - clickedElement.left;
      setPositionInitialClick(firstClickPosition);
      setClicked(true);
    }
  };

  const onMouseUp = (e: any) => {
    if (!isCompleted) {
      const lastClickPosition = e.clientX;
      setPositionFinalClick(lastClickPosition - positionInitialClick);
      setClicked(false);
    }
  };

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
    if (!isCompleted) new Audio(taaacSound).play();
  };

  const handleRemoveDialog = () => {
    dispatch(highlightTask(id));
    if (setShowModal) setShowModal(true);
  };

  return (
    <li className="Task">
      <div
        className={`Task__notification-hidden ${
          clickDragPosition !== 0 ? '-isMoving' : ''
        }${clickDragPosition < 0 ? ' -left' : ''}
       `}
      >
        <div className="Task__notification-hidden__icon">
          <FiCheckCircle />
        </div>
      </div>
      <div
        className={`Task__itself ${taskItselfStyling}`}
        ref={refTaskItself}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
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
      </div>
    </li>
  );
};

export default Task;
