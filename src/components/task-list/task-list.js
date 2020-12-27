import React, {Component} from 'react';
import './Task-list.css';
import Task from '../Task';


export default class TaskList extends Component {

  render() {
    const {items, onDelete, onToggleDone, onEditKeyUp, onEdit, changeText} = this.props;
    return (
      <ul className="todo-list">
      {
        items.map( ({id, isDone, isEdit, isHidden, description, created}) => {
          return (
            <Task key={id} id={id} isDone={isDone} isEdit={isEdit} isHidden={isHidden}
              description={description} created={created}
              onDelete={() => onDelete(id)}
              onToggleDone={() => onToggleDone(id)}
              onEditKeyUp={onEditKeyUp}
              onEdit={onEdit}
              changeText={changeText}
            />
          )
        })
      }
      </ul>
    )
  }

}
