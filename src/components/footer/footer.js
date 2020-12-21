import React from 'react';
import TasksFilter from '../tasks-filter';
import './footer.css';

const Footer = (props) => {
    const todoData = props.items;
    const todoLeft = todoData.reduce((acc, todo) => todo.done? acc : acc + 1, 0);
    return (
        <footer className="footer">
          <span className="todo-count">{todoLeft} items left</span>
          <TasksFilter filterList={props.filterList} />
          <button className="clear-completed" onClick={() => props.clearDone()}>Clear completed</button>
        </footer>
    );
}

export default Footer;