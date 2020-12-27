import React from 'react';
import './New-task-form.css';

const NewTaskForm = ( {label, addTodo, autofocus = true} ) => {
  return (
    <input className="new-todo" placeholder={label} autoFocus={autofocus} onKeyUp={addTodo} />
  );
}

export default NewTaskForm;