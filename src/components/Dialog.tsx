import { FunctionComponent } from 'react';

// State
import { useAppDispatch } from '../state/hooks';
import { highlightTask, removeTask, taskProps } from '../state/taskSlice';

// Components
import Button from './core/Button';

// CopyText
import copyText from '../assets/copyText';

interface DialogProps {
  tasks: taskProps[];
  setShowModal: (event: boolean) => void;
  setShowToast: (event: boolean) => void;
}

const Dialog: FunctionComponent<DialogProps> = ({
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
    <div className="Dialog" data-testid="modal">
      {label}
      <div className="Dialog__buttons">
        <Button
          className="Dialog__delete"
          label={deleteButton}
          type="button"
          onClick={handleDelete}
        />
        <Button
          className="Dialog__goBack"
          label={goBackButton}
          type="button"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
};

export default Dialog;
