import React from 'react';
import './task.css';

const Task = ( {type, descr, created} ) => {
    
    let classNames = '';
    let EditForm = '';
    if (type === "completed") {
        classNames = ` class="completed"`;
    }
    if (type === "editing") {
        classNames = ` class="editing"`;
        EditForm = () => {
            return <input type="text" class="edit" value="Editing task" />;
        }
    }

    return (
        <li{classNames}>
            <div class="view">
              <input class="toggle" type="checkbox">
              <label>
                <span class="description">{descr}</span>
                <span class="created">{created}</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
            <EditForm />
        </li>
    );
};


export default Task;