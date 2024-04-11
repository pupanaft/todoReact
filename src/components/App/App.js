import { Component } from 'react';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

import "./App.css"
export default class App extends Component{
    newId = 150
    state = {
        todoData:[
            {taskClass:"completed" , description: "Completed task", id:1, checked:false},
            {taskClass:"editing" , description: "Editing task", id:2, checked:false},
            {taskClass:"view" , description: "Active task", id:3, checked:false}
        ]
    }
    onDeleteitem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el)=>el.id ===id)
            const newArr = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1)
            ];
            return {
                todoData: newArr
            }
        })
    }
    addTask = (event) => {
        if(event.key === 'Enter'){
            const nevItem = {
                taskClass:"view" , description: ";pup ", id:this.newId++
            }
            this.setState(({todoData}) =>{
                const newArray =[
                    ...todoData,
                    nevItem
                ]
                return{
                    todoData:newArray
                }
            })
        }
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el)=>el.id ===id)
            const oldItem = todoData[idx]
            const newItem = {...oldItem, checked: !oldItem.checked}
            const newArray = [
                ...todoData.slice(0,idx),
                newItem,
                ...todoData.slice(idx+1)
            ]
            return {
                todoData:newArray
            }
            

            
        })

    }
    render(){
        return (
            <section class="todoapp">
                <NewTaskForm addTask={this.addTask}/>
                <section class="main">
                    <TaskList todos = {this.state.todoData}
                     onDeleted={this.onDeleteitem}
                     onToggleDone={this.onToggleDone}/>
                    <Footer/>
                </section>
            </section>
          );
    }
}




