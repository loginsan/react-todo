import React, {Component} from 'react';

import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskList from '../task-list';

export default class App extends Component {

  maxID = 1;

  state = {
    todoData : [
        /*{id: "key1", done: true, edit: false, visible: true, description: "Completed task", created: 1607029021000},
        {id: "key4", done: true, edit: false, visible: true, description: "Some test todo", created: 1607029020000},
        {id: "key2", done: false, edit: true, visible: true, description: "Editing task", created: 1607029201000},
        {id: "key3", done: false, edit: false, visible: true, description: "Active task", created: 1607029920447}*/
        this.createTodoObj("Completed task"),
        this.createTodoObj("Editing task"),
        this.createTodoObj("Active task"),
        this.createTodoObj("Some test todo")
    ]
  };

  createTodoObj(text) {
    return {
      id: "key" + this.maxID++,
      done: false,
      edit: false,
      hidden: false,
      description: text,
      created: Date.now() - Math.ceil(1000 * 60 * 7 * Math.random())
    }
  }

  toggleProp = (propArr, id, name) => {
    const idx = propArr.findIndex((el) => el.id === id);
    const updateTodo =  { ...propArr[idx], [name]: !propArr[idx][name] };
    return {
      todoData : [
        ...propArr.slice(0, idx),
        updateTodo,
        ...propArr.slice(idx + 1)
      ]
    }
  }

  onToggleDone = (id) => {
    this.setState( ({todoData}) => 
      this.toggleProp(todoData, id, "done")
    )
  }

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
  }

  clearDone = () => {
    this.setState( ({todoData}) => {
      const todoLeft = todoData.filter((el) => el.done === false);
      return {
        todoData : todoLeft
      }
    });
  }

  onEditKeyUp = (id, event) => {
    //console.log('onEditKeyUp', id, event.key)
    if (event.key === "Enter") {
      //console.log('onEditKeyUp', id);
      this.setState( ({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const updateTodo =  { ...todoData[idx], description: event.target.value, edit: false};
        return {
          todoData : [
            ...todoData.slice(0, idx),
            updateTodo,
            ...todoData.slice(idx + 1)
          ]
        }
      });
    }
  }
  onEdit = (id, event) => {
    this.setState( ({todoData}) => 
      this.toggleProp(todoData, id, "edit")
    )
  }

  filterList = (filter, event) => {
    //console.log('filter', filter);
    document.querySelector('.filters .selected').classList.remove('selected');
    event.target.classList.add('selected');
    this.setState( ({todoData}) => {
      return {
        todoData: todoData.map( (el) => {
          return { ...el, hidden: (filter === "active")? el.done : (filter === "completed"? !el.done : false) };
        })
      }
    })
  }

  addTodo = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      this.setState( ({todoData}) => {
        const todoAppend = this.createTodoObj(event.target.value);
        event.target.value = "";
        return {
          todoData : [ ...todoData, todoAppend ]
        }
      });
    }
  }

  render() {
    const {todoData} = this.state;
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm label="What needs to be done?" autofocus={true} addTodo={this.addTodo} tabIndex="1" />
            </header>
            <section className="main">
                <TaskList items={todoData} onDelete={this.onDelete} onToggleDone={this.onToggleDone} onEditKeyUp={this.onEditKeyUp} onEdit={this.onEdit} />
                <Footer items={todoData} clearDone={this.clearDone} filterList={this.filterList} />
            </section>
        </section>
    )
  };

}
