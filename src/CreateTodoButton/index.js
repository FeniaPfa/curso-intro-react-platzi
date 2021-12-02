import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
  const { openModal, setOpenModal} = React.useContext(TodoContext);

  const onCLickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="CreateTodoButton"
    onClick={onCLickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };