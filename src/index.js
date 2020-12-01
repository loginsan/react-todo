import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';
import TaskList from './components/task-list';

const App = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm label="What needs to be done?" autofocus={true} />
      </header>
      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
