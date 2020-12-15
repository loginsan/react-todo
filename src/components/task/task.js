import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

export default class Task extends Component {

    render() {
        let {id, level, description, created, onDelete, onToggleDone} = this.props;

        const changeText = function(evt) {
            console.log("Edit text…");
        }
        let classNames = (level === "completed")? "completed" : ((level === "editing")? "editing" : "");
        let editField = (level === "editing")? (
            <input type="text" className="edit" value={description} onChange={changeText} tabIndex="1" />
        ) : null;
        let checkedToggle = (level === "completed")? "checked" : "";

        console.log('render todo', id, level, description);
        return (
            <li id={id} className={classNames}>
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
