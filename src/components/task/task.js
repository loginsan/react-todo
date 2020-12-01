import React from 'react';
import './task.css';

const Task = ( {type, descr, created} ) => {
    
    let classNames = '';
    let EditForm = () => {return null};
    const changeText = function(evt) {
        console.log("Edit text…");
    }
    if (type === "completed") {
        classNames = "completed";
    }
    if (type === "editing") {
        classNames = "editing";
        EditForm = () => {
            return <input type="text" className="edit" value="Editing task" onChange={changeText} />;
        }
    }

    return (
        <li className={classNames}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">{descr}</span>
                <span className="created">{created}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <EditForm />
        </li>
    );
};


export default Task;