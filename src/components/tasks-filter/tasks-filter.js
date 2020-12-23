import React from 'react';
import './Tasks-filter.css';

const TasksFilter = ({filterList}) => {
    return (
        <ul className="filters">
            <li>
              <button className="selected" onClick={(e) => filterList("all", e)}>All</button>
            </li>
            <li>
              <button onClick={(e) => filterList("active", e)}>Active</button>
            </li>
            <li>
              <button onClick={(e) => filterList("completed", e)}>Completed</button>
            </li>
        </ul>
    );
}

export default TasksFilter;