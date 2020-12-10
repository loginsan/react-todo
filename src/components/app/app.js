import React, {Component} from 'react';

import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskList from '../task-list';

export default class App extends Component {
  
  state = {
    todoData : [
        {"id": "key1", "level": "completed", "description": "Completed task", "created": 1607029021000},
        {"id": "key2", "level": "editing", "description": "Editing task", "created": 1607029201000},
        {"id": "key3", "level": "active", "description": "Active task", "created": 1607029920447}
    ]
  }

  render() {
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm label="What needs to be done?" autofocus={true} />
            </header>
            <section className="main">
                <TaskList items={this.state.todoData} />
                <Footer />
            </section>
        </section>
    )
  }
  
}