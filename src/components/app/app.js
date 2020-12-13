import React, {Component} from 'react';

import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskList from '../task-list';

/*{"id": "key1", "level": "completed", "description": "Completed task", "created": 1607029021000},
{"id": "key2", "level": "editing", "description": "Editing task", "created": 1607029201000},
{"id": "key3", "level": "active", "description": "Active task", "created": 1607029920447}*/

export default class App extends Component {

  maxID = 1;
  
  state = {
    todoData : [
        /*this.createTodoObj("Completed task", "completed"),
        this.createTodoObj("Editing task", "editing"),
        this.createTodoObj("Active task")*/
        {"id": "key1", "level": "completed", "description": "Completed task", "created": 1607029021000},
        {"id": "key2", "level": "editing", "description": "Editing task", "created": 1607029201000},
        {"id": "key3", "level": "active", "description": "Active task", "created": 1607029920447}
    ]
  };

  createTodoObj = (text, level = "active") => {
    this.maxID += 1;
    return {
      id: "key" + this.maxID,
      level: level,
      description: text,
      created: Date.now() - 1000 * 60 * 7
    }
  };

  onToggleDone = (id) => {
    console.log('Toggle Done', id)
  };

  onDelete = (id) => {
    const {todoData} = this.state; 
    const idx = todoData.findIndex((item) => item.id === id);
    const todoA = todoData.slice(0, idx);
    const todoB = todoData.slice(idx + 1);
    this.setState(() => {
      return {
        todoData : [...todoA, ...todoB]
      }
    });
  };

  render() {
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm label="What needs to be done?" autofocus={true} tabIndex="1" />
            </header>
            <section className="main">
                <TaskList items={this.state.todoData} onDelete={this.onDelete} onToggleDone={this.onToggleDone} />
                <Footer />
            </section>
        </section>
    )
  };
  
}