import React from 'react';
import './New-task-form.css';

const NewTaskForm = ( {label, addTodo, autofocus} ) => {
  return (
    <input className="new-todo" placeholder={label} autoFocus={autofocus} onKeyUp={addTodo} />
  );
}

NewTaskForm.defaultProps = {
  label: 'What to do?',
  addTodo: () => {},
  autofocus: true
};

export default NewTaskForm;