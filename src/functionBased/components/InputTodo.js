import React, {useState} from "react";
import {FaPlusCircle} from "react-icons/fa";

const InputTodo = (props)=>{

    const [inputText, setInputText] = useState({
        title: "",
    })
    const onChange = (e) =>{
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputText.title.trim()){
            props.addTodoProps(inputText.title)
            setInputText({
                title: "",
            })
        }else {
            alert("Please enter new todo..")
        }
    }


    return (
        <form onSubmit={handleSubmit}
              className="form-container"
        >
            <input type="text"
                   name="title"
                   placeholder="Add new todo ..."
                   className="input-text"
                   onChange={onChange}
                   value={inputText.title}/>
            <button className="input-submit">
                <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
            </button>
        </form>
    )

}

export default InputTodo;