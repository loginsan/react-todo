import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import './Task.css';

export default class Task extends Component {

    setClassName = (isDone, isEdit, isHidden) => {
        let classNames = "";
        if (isDone) classNames = "completed";
        if (isEdit) classNames = "editing";
        if (isHidden) classNames += " hidden";
        return classNames;
    }

    render() {
        const {id, isDone, isEdit, isHidden, description, created, onDelete, onToggleDone, onEditKeyUp, onEdit, changeText} = this.props;

        let classNames = this.setClassName(isDone, isEdit, isHidden);
        let editField = isEdit? (
            <input type="text" className="edit"  tabIndex="1"
              onChange={(event) => changeText(id, event)}
              onKeyUp={(event) => onEditKeyUp(id, event)}
              value={description}
            />
        ) : null;
        let checkedToggle = isDone? "checked" : "";


        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={() => onToggleDone(id)} tabIndex="1" checked={checkedToggle} />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{formatDistanceToNow(created, { addSuffix: true, includeSeconds: true, locale: ruLocale })}</span>
                    </label>
                    <button className="icon icon-edit" onClick={(event) => onEdit(id, event)} tabIndex="1"></button>
                    <button className="icon icon-destroy" onClick={() => onDelete(id)} tabIndex="1"></button>
                </div>
                { editField }
            </li>
        );
    }
}
