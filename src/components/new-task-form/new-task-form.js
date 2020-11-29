import React from 'react';
import './new-task-form.css';

const NewTaskForm = ( {label, autofocus = true} ) => {
    const autofocusAttr = {autofocus} ? "autofocus" : "";
    return (
        <input class="new-todo" placeholder={label} {autofocusAttr} />
    );
}

export default NewTaskForm;