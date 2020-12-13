import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true, locale: "ru-RU" })
// {"id": "key1", "level": "completed", "description": "Completed task", "created": 1607029021000}
import './task.css';

export default class Task extends Component {
    constructor(props) {
        super(props);
        let {id, level, description, created} = this.props;
        this.state = {
            id: id,
            level: level,
            description: description,
            created: new Date(created)
        };
    }

    /*componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            created: formatDistanceToNow(this.state.created, { addSuffix: true, includeSeconds: true })
            //created: this.state.created + 1000
        });
    }*/

    render() {
        let {id, onDelete, onToggleDone} = this.props;
        let {level, description, created} = this.state;

        const changeText = function(evt) {
            console.log("Edit text…");
        }
        let classNames = (level === "completed")? "completed" : ((level === "editing")? "editing" : "");
        let editField = (level === "editing")? (
            <input type="text" className="edit" value={description} onChange={changeText} tabIndex="1" />
        ) : null;

        return (
            <li id={id} className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={() => onToggleDone(id)} checked={level === "completed"? "checked" : ""} tabIndex="1" />
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
