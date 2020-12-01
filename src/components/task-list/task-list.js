import React from 'react';
import './task-list.css';
import Task from '../task';

const TaskList = (props) => {
    return (
        <ul className="todo-list">
            <Task type="completed" descr="Completed task" created="created 17 seconds ago" />
            <Task type="editing" descr="Editing task" created="created 5 minutes ago" />
            <Task type="active" descr="Active task" created="created 6 minutes ago" />
        </ul>
    );
};

export default TaskList;