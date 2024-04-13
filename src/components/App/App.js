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
        ],
        selectedFilter:'All'
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
    onItemAdded = (label) => {
       this.setState((state)=>{
            const item = {
                taskClass:"view" ,
                description: label,
                id:++this.newId,
                checked:false
            }
            return {todoData:[...state.todoData, item]}
       })
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
    clear = () =>{
        this.setState(()=>{
            const newData = []
            return{todoData:newData}
        })
    }
    filterChange = (id) =>{
        
        this.setState(() =>{
            const newFilter = id
            return{
                selectedFilter:newFilter
            }
        })
    }
    activeFilter = (todoData, selectedFilter) => {
        if (selectedFilter === 'All'){
            return todoData
        }else if (selectedFilter === 'Active'){
            return todoData.filter((Data) => !Data.checked)
        }else if (selectedFilter === 'Completed'){
            return todoData.filter((Data) => Data.checked)
        }
    }
    render(){
        const {todoData, selectedFilter} = this.state
        const itemLeft = todoData.filter((item) => !item.checked).length
        const visibleTodos = this.activeFilter(todoData, selectedFilter)
        return (
            <section class="todoapp">
                <NewTaskForm onItemAdded={this.onItemAdded}/>
                <section class="main">
                    <TaskList todos = {visibleTodos}
                     onDeleted={this.onDeleteitem}
                     onToggleDone={this.onToggleDone}/>
                    <Footer itemLeft={itemLeft}
                            clear = {this.clear}
                            selectedFilter ={selectedFilter}
                            filterChange={this.filterChange}/>
                </section>
            </section>
          );
    }
}




