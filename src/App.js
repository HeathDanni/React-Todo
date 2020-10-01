import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todolist =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist
    };
  }

  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todolist: [
        ...this.state.todolist,
        newTodo
      ]
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todolist={this.state.todolist}/>
      </div>
    );
  }
}

export default App;
