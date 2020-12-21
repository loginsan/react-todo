import React from 'react';
import './new-task-form.css';

const NewTaskForm = ( {label, addTodo, autofocus = true} ) => {
    return (
        <input className="new-todo" placeholder={label} autoFocus={autofocus} onKeyUp={(e) => addTodo(e)} />
    );
}

export default NewTaskForm;