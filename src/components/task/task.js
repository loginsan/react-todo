import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true, locale: "ru-RU" })
// {"id": "key1", "level": "completed", "description": "Completed task", "created": 1607029021000}
import './task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            level: this.props.level,
            description: this.props.description,
            created: new Date(this.props.created)
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
        const TaskView = (
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{this.state.description}</span>
                    <span className="created">{formatDistanceToNow(this.state.created, { addSuffix: true, includeSeconds: true })}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        );
        const changeText = function(evt) {
            console.log("Edit text…");
        }
        let TaskBody = '';

        if (this.state.level === "active") {
            TaskBody = (
                <li key={this.state.id}>
                    { TaskView }
                </li>
            );
        }
        if (this.state.level === "completed") {
            TaskBody = (
                <li key={this.state.id} className="completed">
                    { TaskView }
                </li>
            );
        }
        if (this.state.level === "editing") {
             TaskBody = (
                <li key={this.state.id} className="editing">
                    { TaskView }
                    <input type="text" className="edit" value={this.state.description} onChange={changeText} />
                </li>
            );
        }
        return TaskBody;
    }
}

export default Task;