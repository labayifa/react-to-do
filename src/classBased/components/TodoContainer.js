
import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";

import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    state = {
        todos : []
    }

    handleChange = (id) =>{
       this.setState(prevState => ({
           todos: prevState.todos.map(todo => {
               if(todo.id === id){
                   return {
                       ...todo,
                       completed: !todo.completed,
                   }
               }
               return todo;
           }),
       }));
    }

    handleDelete = (id) =>{
        this.setState({
            todos:[
                ...this.state.todos.filter(todo =>{
                    return todo.id !== id;
                })
            ]
        });
    }

    addTodo = (title) =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    setUpdate = (updateTitle, id) =>{
        console.log(updateTitle, id);
        this.setState(prevState =>({
            todos: prevState.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        title: updateTitle,
                    }
                }
                return todo;
            }),
        }))
    }

    componentDidMount() {
        const temp = localStorage.getItem("todos")
        if (temp !== null){
            const loadedTodos = JSON.parse(temp)
            if (loadedTodos) {
                this.setState({
                    todos: loadedTodos
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

    componentWillUnmount() {
        console.log("Cleaning up...")
    }

    render() {
        return(
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodo}/>
                    <TodoList todos = {this.state.todos}
                              handleChangeProps={this.handleChange}
                              handleDeleteProps={this.handleDelete}
                              setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        );
    }
}

export default TodoContainer;