import { FunctionComponent } from 'react';

// State
import { useAppDispatch } from '../state/hooks';
import { highlightTask, removeTask, taskProps } from '../state/taskSlice';

// Components
import Button from './core/Button';

interface ModalProps {
  label: string;
  tasks: taskProps[];
  setShowModal: (event: boolean) => void;
  setShowToast: (event: boolean) => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  label,
  tasks,
  setShowModal,
  setShowToast,
}) => {
  const dispatch = useAppDispatch();

  const TOAST_SECONDS_TO_HIDE = 5000;

  const selectedItem = tasks.filter((task) => task.isHighlighted)[0];

  const handleDelete = () => {
    if (selectedItem) {
      dispatch(removeTask(selectedItem.id));
      setShowModal(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, TOAST_SECONDS_TO_HIDE);
    }
  };

  const handleGoBack = () => {
    dispatch(highlightTask(selectedItem.id));
    setShowModal(false);
  };

  return (
    <div>
      {label}
      <Button label="delete" type="button" onClick={handleDelete} />
      <Button label="annulla" type="button" onClick={handleGoBack} />
    </div>
  );
};

export default Modal;
