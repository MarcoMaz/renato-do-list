import { FunctionComponent } from 'react';

// State
import { useAppDispatch } from '../state/hooks';
import { highlightTask, removeTask, taskProps } from '../state/taskSlice';

// Components
import Button from './core/Button';

// CopyText
import copyText from '../assets/copyText';

interface ModalProps {
  tasks: taskProps[];
  setShowModal: (event: boolean) => void;
  setShowToast: (event: boolean) => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  tasks,
  setShowModal,
  setShowToast,
}) => {
  const dispatch = useAppDispatch();

  const TOAST_SECONDS_TO_HIDE = 5000;

  const selectedItem = tasks.filter((task) => task.isHighlighted)[0];

  const { label, deleteButton, goBackButton } = copyText.modal;

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
    <div className="Modal" data-testid="modal">
      {label}
      <div className="Modal__buttons">
        <Button
          className="Modal__delete"
          label={deleteButton}
          type="button"
          onClick={handleDelete}
        />
        <Button
          className="Modal__goBack"
          label={goBackButton}
          type="button"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
};

export default Modal;
