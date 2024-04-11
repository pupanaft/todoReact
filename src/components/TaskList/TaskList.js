import Task from "../Task/Task"
import "./TaskList.css"

const TaskList = ({todos, onDeleted, onToggleDone}) => {
    const elements = todos.map((item) => {
        const {id, taskClass, ...itemProps} = item
        if (taskClass === 'editing'){
            return (
                <li key={id} className ={taskClass}>
                    <Task {...itemProps} />
                    <input type="text" class="edit" value="Editing task"/>
                </li>
            )
        }
        return (
            <li key={id} className ={taskClass}>
                <Task 
                {...itemProps} 
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                id = {id}/>
            </li>
        )
    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList