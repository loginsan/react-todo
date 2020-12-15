import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

export default class Task extends Component {

    taskText = this.props.description;

    changeText = (evt) => {
        this.taskText = evt.target.value;
    };

    render() {
        let {id, done, edit, description, created, onDelete, onToggleDone} = this.props;

        
        let classNames = done? "completed" : (edit? "editing" : "");
        let editField = edit? (
            <input type="text" className="edit" value={this.taskText} onChange={this.changeText} tabIndex="1" />
        ) : null;
        let checkedToggle = done? "checked" : "";

        console.log('render todo', id, done, description);
        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={() => onToggleDone(id)} tabIndex="1" checked={checkedToggle} />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{formatDistanceToNow(created, { addSuffix: true, includeSeconds: true })}</span>
                    </label>
                    <button className="icon icon-edit" tabIndex="1"></button>
                    <button className="icon icon-destroy" onClick={() => onDelete(id)} tabIndex="1"></button>
                </div>
                { editField }
            </li>
        );
    }
}
