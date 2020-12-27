import React, {Component} from 'react';
import NewTaskForm from '../New-task-form';
import TaskList from '../Task-list';
import Footer from '../Footer';
import C from '../../constant';

export default class App extends Component {

  state = {
    todoData : [
        this.createTodoObj("Completed task", true),
        this.createTodoObj("Editing task", true),
        this.createTodoObj("Active task", true),
        this.createTodoObj("Some test todo", true)
    ]
  };

  setId() {
    return "key" + (Date.now() - Math.ceil(1000 * Math.random()))
  }

  createTodoObj(text, demo = false) {
    return {
      id: this.setId(),
      isDone: false,
      isEdit: false,
      isHidden: false,
      description: text,
      created: demo? Date.now() - Math.ceil(1000 * 60 * 7 * Math.random()) : Date.now()
    }
  }

  toggleProp = (propArr, id, name) => {
    return {
      todoData: propArr.map( el => {
        return (el.id === id)? { ...el, [name]: !el[name] } : el
      })
    }
  }

  onToggleDone = (id) => {
    this.setState( ({todoData}) =>
      this.toggleProp(todoData, id, "isDone")
    )
  }

  onEdit = (id, event) => {
    this.setState( ({todoData}) =>
      this.toggleProp(todoData, id, "isEdit")
    )
  }

  onEditKeyUp = (id, event) => {
    if (event.key === "Enter") {
      this.onEdit(id, event);
    }
  }

  changeText = (id, event) => {
    this.setState( ({todoData}) => {
      return {
        todoData: todoData.map( todo => {
          return (todo.id === id)? { ...todo, description: event.target.value} : todo
        })
      }
    })
  }

  onDelete = (id) => {
    this.setState( ({todoData}) => {
      return {
        todoData: todoData.filter( el => el.id !== id )
      }
    });
  }

  clearDone = () => {
    this.setState( ({todoData}) => {
      return {
        todoData: todoData.filter( el => el.isDone === false )
      }
    });
  }

  filterList = (event, filter = C.ALL) => {
    document.querySelector('.filters .selected').classList.remove('selected');
    event.target.classList.add('selected');
    this.setState( ({todoData}) => {
      return {
        todoData: todoData.map( el => {
          let flagHidden = false;
          if (filter === C.ACTIVE_CN) flagHidden = el.isDone;
          if (filter === C.DONE_CN) flagHidden = !el.isDone;
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
          todoData: [ ...todoData, todoAppend ]
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
          <NewTaskForm label="What needs to be done?" addTodo={this.addTodo} />
        </header>
        <section className="main">
          <TaskList items={todoData} 
            onDelete={this.onDelete} onToggleDone={this.onToggleDone} 
            onEdit={this.onEdit} onEditKeyUp={this.onEditKeyUp} changeText={this.changeText} 
          />
          <Footer items={todoData} clearDone={this.clearDone} filterList={this.filterList} />
        </section>
      </section>
    )
  };

}
