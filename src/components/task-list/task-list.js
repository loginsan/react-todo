import React from 'react';
import './task-list.css';
import Task from '../task';
// {"id": "key1", "level": "completed", "description": "Completed task", "created": 1607029021000}
/*
<Task key="" level="completed" descr="Completed task" created="created 17 seconds ago" />
<Task key="" level="editing" descr="Editing task" created="created 5 minutes ago" />
<Task key="" level="active" descr="Active task" created="created 6 minutes ago" />
*/

const TaskList = ( props ) => {
    return (
        <ul className="todo-list">
        { props.items.map( todo => (
            <Task key={todo.id} level={todo.level} description={todo.description} created={todo.created} />
        ) ) }
        </ul>
    );
};

export default TaskList;