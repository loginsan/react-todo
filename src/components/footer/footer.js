import React from 'react';
import TasksFilter from '../Tasks-filter';
import './Footer.css';

const Footer = ({items, filterList, clearDone}) => {
  const todoLeft = items.reduce((acc, todo) => todo.isDone? acc : acc + 1, 0);
  return (
    <footer className="footer">
      <span className="todo-count">{todoLeft} items left</span>
      <TasksFilter filterList={filterList} />
      <button className="clear-completed" onClick={clearDone}>Clear completed</button>
    </footer>
  )
}

Footer.defaultProps = {
  items: [],
  filterList: () => {},
  clearDone: () => {}
}

export default Footer;