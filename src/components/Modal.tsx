/* eslint-disable no-console */
import { FunctionComponent } from 'react';
import { useAppDispatch } from '../state/hooks';
import { highlightTask, removeTask, taskProps } from '../state/taskSlice';

interface ModalProps {
  setShowModal: (event: boolean) => void;
  setShowToast: (event: boolean) => void;
  tasks: taskProps[];
}

const Modal: FunctionComponent<ModalProps> = ({
  setShowModal,
  setShowToast,
  tasks,
}) => {
  const dispatch = useAppDispatch();

  const selectedItem = tasks.filter((x) => x.isHighlighted)[0];

  const handleRemoval = () => {
    if (selectedItem) {
      dispatch(removeTask(selectedItem.id));
      setShowModal(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  const handleGoBack = () => {
    dispatch(highlightTask(selectedItem.id));
    setShowModal(false);
  };

  return (
    <div>
      Are you sure?
      <button type="button" onClick={handleRemoval}>
        Delete
      </button>
      <button type="button" onClick={handleGoBack}>
        Annulla
      </button>
    </div>
  );
};

export default Modal;
