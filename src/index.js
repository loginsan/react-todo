import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';


const App = () => {
  return (
<html lang="en" data-framework="es6">
  <head>
    <meta charset="utf-8">
    <title>React • TodoMVC</title>
  </head>
  <body>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <NewTaskForm label="What needs to be done?" autofocus="true" />
      </header>
      <section class="main">
        <TaskList />
        <Footer />
      </section>
    </section>
  </body>
</html>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
