import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import './TodoApp.css';

// Functional Components 
const Title = ({ todoCount }) => {
    return (
        <div className="TodoApp-header">
            <h1>My To-dos ({todoCount})</h1>
        </div>
    );
}

const TodoList = ({ todos, remove }) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
        return (
            <Todo todo={todo} key={todo.id} remove={remove} />
        )
    });
    return (
        <List>{todoNode}</List>
    );
}

const Todo = ({ todo, remove }) => {
    // Each Todo
    return (
        <ListItem primaryText={todo.text} onClick={() => { remove(todo.id) }} rightIcon={<ActionDeleteForever />} />
    );
}

const TodoForm = ({ addTodo }) => {
    // Input tracker
    let input;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addTodo(input.value);
            input.value = '';
        }}>
            <input className="form-control col-md-12" ref={node => {
                input = node;
            }} />
            <br />
        </form>
    );
};

// Todo Id
window.id = 0;

// Container Component
class TodoApp extends Component {
    constructor(props) {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
            data: []
        }
    }

    // Add todo handler
    addTodo(val) {
        // Assemble data
        const todo = { text: val, id: window.id++ }
        // Update data
        this.state.data.push(todo);
        // Update state
        this.setState({ data: this.state.data });
    }

    // Handle remove
    handleRemove(id) {
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            }
            return null;
        });
        // Update state with filter
        this.setState({ data: remainder });
    }

    // Render JSX
    render() {
        return (
            <div className="TodoApp">
                <MuiThemeProvider>
                    <div>
                        <Title todoCount={this.state.data.length} />
                        <TodoForm addTodo={this.addTodo.bind(this)} />
                        <TodoList
                            todos={this.state.data}
                            remove={this.handleRemove.bind(this)}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default TodoApp;