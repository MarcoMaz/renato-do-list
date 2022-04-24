/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FunctionComponent, useState } from 'react';

// import ICONS
import { FiCheckCircle, FiTrash2 } from 'react-icons/fi';

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

  const [clickDragPosition, setClickDragPosition] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const taskStyling = clickDragPosition !== 0 ? '-isMoving' : '';
  const THRESHOLD_IN_PIXELS = 100;

  let distanceBetweenClicks;
  let nextTouchEvent;
  let previousTouchEvent;

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

  const onTouchStart = (e: any) => {
    if (!isCompleted) setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => {
    if (!isCompleted) {
      nextTouchEvent = e.targetTouches[0].clientX;
      previousTouchEvent = nextTouchEvent - 1;

      const swipeRight =
        clickDragPosition + (nextTouchEvent - previousTouchEvent) * 6;
      const swipeLeft =
        clickDragPosition + (nextTouchEvent - previousTouchEvent) * -6;

      if (touchEnd !== 0) {
        if (touchStart <= touchEnd) {
          setClickDragPosition(swipeRight);
        } else {
          setClickDragPosition(swipeLeft);
        }
      }
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    if (!isCompleted) {
      distanceBetweenClicks = touchStart - touchEnd;

      if (
        distanceBetweenClicks < THRESHOLD_IN_PIXELS ||
        distanceBetweenClicks > -THRESHOLD_IN_PIXELS
      ) {
        handleCompleteTask();
      }
    }
  };

  return (
    <li className="Task">
      <div
        className={`Task__notification-hidden ${taskStyling}${
          clickDragPosition < 0 ? ' -left' : ''
        }
       `}
      >
        <div className="Task__notification-hidden__icon">
          {clickDragPosition < 0 ? <FiCheckCircle /> : <FiTrash2 />}
        </div>
      </div>
      <div
        className={`Task__itself ${taskStyling}`}
        style={{ transform: `translateX(${clickDragPosition}px` }}
      >
        <Checkbox
          label={label}
          value={id}
          isChecked={isCompleted}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onChange={handleCompleteTask}
        />
        <div className="Task__buttons">
          {!isCompleted && (
            <Link to="add-edit" className="Task__edit">
              <Button editSign type="button" onClick={handleModifyTask} />
            </Link>
          )}
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
