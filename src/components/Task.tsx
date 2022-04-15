/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useEffect, useRef, useState } from 'react';

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
  const refTaskItself: any = useRef();
  const refNotificationHidden: any = useRef();

  let taskWidth;
  let clickDragHalfWay;

  useEffect(() => {
    taskWidth = refTaskItself.current.getBoundingClientRect().width;
    clickDragHalfWay = (taskWidth * 50) / 100;

    const EndpointRight = clickDragPosition > clickDragHalfWay;
    const EndpointLeft = clickDragPosition < -clickDragHalfWay;
    const clickDragRight = clickDragPosition > 0;
    const clickDragLeft = clickDragPosition < 0;

    if (refTaskItself.current) {
      refTaskItself.current.style.transform = `translateX(${clickDragPosition}px`;
    }

    if (refNotificationHidden.current) {
      if (clickDragRight) {
        refNotificationHidden.current.style.background = 'red';
      }
      if (clickDragLeft) {
        refNotificationHidden.current.style.background = 'green';
      }
    }

    if (EndpointRight || EndpointLeft) {
      dispatch(toggleTask(id));
    }
  }, [clickDragPosition]);

  const onMouseMove = (event: any) => {
    if (clicked) setClickDragPosition(clickDragPosition + event.movementX);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
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
      <div className="Task__notification-hidden" ref={refNotificationHidden}>
        Notification Hidden
      </div>
      <div
        className="Task__itself"
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
