import React from 'react';
import './task-list.css';
import Task from '../task';


const TaskList = ( props ) => {
    let {items, onDelete, onToggleDone} = props;

    return (
        <ul className="todo-list">
        { items.map( todo => (
            <Task key={todo.id} id={todo.id} level={todo.level} description={todo.description} created={todo.created} onDelete={onDelete} onToggleDone={onToggleDone} />
        ) ) }
        </ul>
    );
};

export default TaskList;