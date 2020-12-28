import React from 'react';
import './Tasks-filter.css';
import C from '../../constant';

const TasksFilter = ({filterList}) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={filterList}>{C.ALL}</button>
      </li>
      <li>
        <button onClick={(event) => filterList(event, C.ACTIVE_CN)}>{C.ACTIVE}</button>
      </li>
      <li>
        <button onClick={(event) => filterList(event, C.DONE_CN)}>{C.DONE}</button>
      </li>
    </ul>
  )
}

TasksFilter.defaultProps = {
  filterList: () => {}
}

export default TasksFilter;