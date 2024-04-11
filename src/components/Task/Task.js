import "./Task.css"
import { Component } from 'react';

export default class Task extends Component{

    render(){
        
        const {description, onDeleted, id, checked, onToggleDone} = this.props
        let className = "description"
        if (checked){
            className+=' checked'
        }
        return (

            <div className="view">
                <input 
                    className="toggle"  
                    type="checkbox"
                    id ={id}
                    onChange={onToggleDone}
                />
                <label for ={id}>
                    <span className={className}>{description}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"
                        onClick={onDeleted}>
                </button>
            </div>
        )
    }
}

    
    

