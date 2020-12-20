import React, {Component} from 'react';
import './task-list.css';
import Task from '../task';


export default class TaskList extends Component {

    render() {
        const {items, onDelete, onToggleDone, onEditKeyUp, onEdit} = this.props;
        return (
            <ul className="todo-list">
            { 
                items.map( el => {
                    const {id, done, edit, description, created} = el;
                    return (
                        <Task key={id} id={id} done={done} edit={edit}
                            description={description} created={created}
                            onDelete={() => onDelete(id)} 
                            onToggleDone={() => onToggleDone(id)}
                            onEditKeyUp={onEditKeyUp}
                            onEdit={onEdit}
                        />
                    )
                })
            }
            </ul>
        )
    }

};
