import React from 'react';
import './tasks-filter.css';

const TasksFilter = (props) => {
    const {filterList} = props;
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