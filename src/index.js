import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';
import TaskList from './components/task-list';

const App = () => {
  const todos = [
    {"id": "key1", "level": "completed", "description": "Completed task", "created": 1607029021000},
    {"id": "key2", "level": "editing", "description": "Editing task", "created": 1607029201000},
    {"id": "key3", "level": "active", "description": "Active task", "created": 1607029920447}
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm label="What needs to be done?" autofocus={true} />
      </header>
      <section className="main">
        <TaskList items={todos} />
        <Footer />
      </section>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
