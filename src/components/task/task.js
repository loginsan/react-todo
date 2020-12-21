import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

export default class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskEditText: props.description
        }
    }

    changeText = (evt) => {
        this.setState( {taskEditText: evt.target.value} )
    }

    componentDidUpdate() {
        //console.log('.');
    }

    render() {
        const {id, done, edit, hidden, description, created, onDelete, onToggleDone, onEditKeyUp, onEdit} = this.props;

        let classNames = done? "completed" : "";
        classNames = edit? "editing" : classNames;
        let editField = edit? (
            <input type="text" className="edit" onChange={this.changeText} onKeyUp={(event) => onEditKeyUp(id, event)} value={this.state.taskEditText} tabIndex="1" />
        ) : null;
        let checkedToggle = done? "checked" : "";
        if (hidden) {
            classNames += " hidden";
        }

        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={() => onToggleDone(id)} tabIndex="1" checked={checkedToggle} />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{formatDistanceToNow(created, { addSuffix: true, includeSeconds: true })}</span>
                    </label>
                    <button className="icon icon-edit" onClick={(event) => onEdit(id, event)} tabIndex="1"></button>
                    <button className="icon icon-destroy" onClick={() => onDelete(id)} tabIndex="1"></button>
                </div>
                { editField }
            </li>
        );
    }
}
