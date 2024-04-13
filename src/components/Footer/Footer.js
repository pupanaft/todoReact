import TasksFilter from "../TasksFilter/TasksFilter"
import './Footer.css'

const Footer = ({itemLeft, clear, filterChange, selectedFilter}) =>{
    return (
        <footer className="footer">
          <span className="todo-count">{itemLeft} items left</span>
            <TasksFilter filterChange={filterChange} selectedFilter ={selectedFilter}/>
          <button className="clear-completed"  onClick={clear}>Clear completed</button>
        </footer>
    )
}

export default Footer