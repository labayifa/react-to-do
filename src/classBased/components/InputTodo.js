import React, {Component} from "react";

class InputTodo extends Component{
    state = {
        title: ""
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: "",
            })
        }else {
            alert("Please enter new todo..")
        }
    }

    render() {
        return (
           <form onSubmit={this.handleSubmit}
                 className="form-container"
           >
               <input type="text"
                      name="title"
                      placeholder="Add new todo ..."
                      className="input-text"
                      onChange={this.onChange}
                      value={this.state.title}/>
               <button className="input-submit">
                   Submit
               </button>
           </form>
        )
    }
}

export default InputTodo;