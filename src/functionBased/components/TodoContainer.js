
import React, {useState, useEffect} from "react";

import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";

import { v4 as uuidv4 } from "uuid";
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./NavBar";

const TodoContainer = () => {

    const [todos, setTodos] = useState(getInitialTodos());

    const handleChange = (id) =>{
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    }

    const handleDelete = (id) =>{
        setTodos([
            ...todos.filter(todo =>{
                return todo.id !== id;
            })
        ]);
    }

    const addTodo = (title) =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    const setUpdate = (updateTitle, id) =>{
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updateTitle
                }
                return todo
            })
        )
    }

    // componentDidMount() {
    //     const temp = localStorage.getItem("todos")
    //     if (temp !== null){
    //         const loadedTodos = JSON.parse(temp)
    //         if (loadedTodos) {
    //             this.setState({
    //                 todos: loadedTodos
    //             })
    //         }
    //     }
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.todos !== this.state.todos) {
    //         const temp = JSON.stringify(this.state.todos)
    //         localStorage.setItem("todos", temp)
    //     }
    // }
    //
    // componentWillUnmount() {
    //     console.log("Cleaning up...")
    // }

    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        console.log("test run")
        // getting stored items
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        console.log(temp)
        if (loadedTodos !== null) {
            setTodos(getInitialTodos())
        }
    }, [setTodos])

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)

        localStorage.setItem("todos", temp)
    }, [todos])

    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/"
                    element={ <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodo}/>
                            <TodoList todos = {todos}
                                      handleChangeProps={handleChange}
                                      handleDeleteProps={handleDelete}
                                      setUpdate={setUpdate}
                            />
                        </div>
                    </div>
                }
                >

                </Route>
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<NotMatch />}>
                </Route>
            </Routes>

        </>
    );
}

export default TodoContainer;