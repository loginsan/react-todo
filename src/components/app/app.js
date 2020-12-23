import React, {Component} from 'react';

import NewTaskForm from '../New-task-form';
import Footer from '../Footer';
import TaskList from '../Task-list';

export default class App extends Component {

  state = {
    todoData : [
        this.createTodoObj("Completed task"),
        this.createTodoObj("Editing task"),
        this.createTodoObj("Active task"),
        this.createTodoObj("Some test todo")
    ]
  };

  setId() {
    return "key" + (Date.now() - Math.ceil(1000 * 60 * 7 * Math.random()))
  }

  createTodoObj(text) {
    return {
      id: this.setId(),
      isDone: false,
      isEdit: false,
      isHidden: false,
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
      this.toggleProp(todoData, id, "isDone")
    )
  }

  onDelete = (id) => {
    this.setState( ({todoData}) => {
      return {
        todoData : todoData.filter( el => el.id !== id )
      }
    });
  }

  clearDone = () => {
    this.setState( ({todoData}) => {
      return {
        todoData : todoData.filter((el) => el.isDone === false)
      }
    });
  }

  onEditKeyUp = (id, event) => {
    if (event.key === "Enter") {
      this.setState( ({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const updateTodo =  { ...todoData[idx], description: event.target.value, isEdit: false};
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
      this.toggleProp(todoData, id, "isEdit")
    )
  }

  filterList = (filter, event) => {
    document.querySelector('.filters .selected').classList.remove('selected');
    event.target.classList.add('selected');
    this.setState( ({todoData}) => {
      return {
        todoData: todoData.map( (el) => {
          let flagHidden = false;
          if (filter === "active") flagHidden = el.isDone;
          if (filter === "completed") flagHidden = !el.isDone;
          return { ...el, isHidden: flagHidden };
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
