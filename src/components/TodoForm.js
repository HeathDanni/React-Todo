import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        };
    }

    handleChange = e => {
        this.setState({
            ...this.state, 
            newTodo: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.newTodo);
        this.setState({ 
            ...this.state, 
            newTodo: "" 
        });
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type='text'
                    name='todo'
                    value={this.state.newtodo}
                    onChange={this.handleChange}
                ></input>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;