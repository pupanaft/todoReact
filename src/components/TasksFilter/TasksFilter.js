import "./TasksFilter.css"

const filterNames = [{description:"All",id:"All"},
                    {description:"Active",id:"Active"},
                    {description:"Completed",id:"Completed"}]
const TasksFilter = ({filterChange, selectedFilter}) => {
    const filters = filterNames.map((filter)=>{
        let className =''
        if (filter.description === selectedFilter ){
            className ='selected'
        }
        return (
            <li key={filter.id}><button   onClick={()=>filterChange(filter.id)} className={className}>{filter.description}</button></li>
        )
    })
    return (
        <ul className="filters">
            {filters}
      </ul>
    )
}

export default TasksFilter