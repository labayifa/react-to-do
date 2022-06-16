import React, {useEffect, useState} from "react";
import {FaTrash} from  "react-icons/fa";
import styles from "./TodoItem.module.css"

const TodoItem = (props) =>{

    const [editing, setEditing] = useState(false);

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const handleEditing = ()=>{
        console.log("edit mode activated")
        setEditing( true )
    }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing( false )
        }
    }

    useEffect(() => {
        console.log("Cleaning up...")
    }, [])

    // componentWillUnmount() {
    //     console.log("Cleaning up...", this.props.todo.id)
    // }

    const { completed, id, title } = props.todo
    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input type="checkbox"
                       className={styles.checkbox}
                       checked={completed}
                       onChange={() => props.handleChange(id)}
                />
                <button onClick={() => props.handleDelete(id)}>
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                </button>
                <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => {
                    if(e.target.value.trim()){
                        props.setUpdate(e.target.value, id)
                    }else{
                        alert("Enter valid todo...")
                    }
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    )
}

export default TodoItem;