import React, {Component} from 'react';

import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskList from '../task-list';

export default class App extends Component {

  maxID = 1;

  state = {
    todoData : [
        {id: "key1", done: true, edit: false, description: "Completed task", created: 1607029021000},
        {id: "key4", done: true, edit: false, description: "Some test todo", created: 1607029020000},
        {id: "key2", done: false, edit: true, description: "Editing task", created: 1607029201000},
        {id: "key3", done: false, edit: false, description: "Active task", created: 1607029920447}
    ]
  };

  createTodoObj = (text, done = false) => {
    this.maxID += 1;
    return {
      id: "key" + this.maxID,
      done: done,
      edit: false,
      description: text,
      created: Date.now() - 1000 * 60 * 7
    }
  };

  onToggleDone = (id) => {
    this.setState( ({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const updateTodo = {
        id: todoData[idx].id,
        done: !todoData[idx].done,
        edit: false,
        description: todoData[idx].description,
        created: todoData[idx].created
      };
      console.log('Toggle Done', id, idx, updateTodo);
      return {
        todoData : [
          ...todoData.slice(0, idx),
          updateTodo,
          ...todoData.slice(idx + 1)
        ]
      }
    });
  };

  onDelete = (id) => {
    this.setState( ({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      return {
        todoData : [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ]
      }
    });
  };

  clearDone = () => {
    this.setState( ({todoData}) => {
      const todoLeft = todoData.filter((el) => el.done === false);
      return {
        todoData : todoLeft
      }
    });
  };

  render() {
    const {todoData} = this.state;
    console.log('render App');
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm label="What needs to be done?" autofocus={true} tabIndex="1" />
            </header>
            <section className="main">
                <TaskList items={todoData} onDelete={this.onDelete} onToggleDone={this.onToggleDone} />
                <Footer items={todoData} clearDone={this.clearDone} />
            </section>
        </section>
    )
  };

}
