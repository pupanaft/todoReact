import "./NewTaskForm.css"
import { Component } from 'react';

export default class NewTaskForm  extends Component{
    state ={
        label:''
    }
    submitPress = (e) =>{
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label:''
        })
    }
    addTask = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    render() {
        return (
            <form className="header"
                  onSubmit={this.submitPress}>
                <h1>todos</h1>
                <input className="new-todo" 
                       onChange={this.addTask} 
                       value={this.state.label}
                       placeholder="What needs to be done?" 
                       autoFocus/>
            </form>
        )
    }

}
