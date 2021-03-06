import React from "react";

import styles from "./TodoItem.module.css"

class TodoItem extends React.Component{
    state = {
        editing: false,
    };

    completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    handleEditing = ()=>{
        console.log("edit mode activated")
        this.setState({
            editing: true,
        })
    }

    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    }

    componentWillUnmount() {
        console.log("Cleaning up...")
    }
    render() {
        const { completed, id, title } = this.props.todo
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input type="checkbox"
                           className={styles.checkbox}
                           checked={completed}
                           onChange={() => this.props.handleChange(id)}
                    />
                    <button onClick={() => this.props.handleDelete(id)}>Delete</button>
                    <span style={completed ? this.completedStyle : null}>
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
                            this.props.setUpdate(e.target.value, id)
                        }else{
                            alert("Enter valid todo...")
                        }
                    }}
                    onKeyDown={this.handleUpdatedDone}
                />
            </li>
        )
    }


}

export default TodoItem;