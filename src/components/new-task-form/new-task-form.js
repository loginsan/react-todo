import React from 'react';
import './new-task-form.css';

const NewTaskForm = ( {label, autofocus = true} ) => {
    return (
        <input className="new-todo" placeholder={label} autoFocus={autofocus} />
    );
}

export default NewTaskForm;