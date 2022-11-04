import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion, filterFunction}) =>{
    let tasks_elements = tasks.filter(task => filterFunction(task));


    return(
        <> 
        {tasks_elements.map((task) => <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} /> )}
        </>
    )

}
export default Tasks