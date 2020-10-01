import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todolist.map((todo) => (
                <Todo key={todo.id} todo={todo}/>
            ))
        }
        <button>Clear Completed</button>
        </div>
    )
};

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
