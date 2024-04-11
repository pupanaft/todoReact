import "./NewTaskForm.css"

const NewTaskForm = ({addTask}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" onKeyUp={addTask} placeholder="What needs to be done?" autoFocus/>
        </header>
    )
}

export default NewTaskForm