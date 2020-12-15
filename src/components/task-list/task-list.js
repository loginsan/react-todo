import React, {Component} from 'react';
import './task-list.css';
import Task from '../task';


export default class TaskList extends Component {

    render() {
      const {items, onDelete, onToggleDone} = this.props;
      return (
          <ul className="todo-list">
          { items.map( el => (
              <Task key={el.id} id={el.id} level={el.level}
                  description={el.description}
                  created={el.created}
                  onDelete={onDelete} onToggleDone={onToggleDone} />
          ) ) }
          </ul>
      );
    }

};
