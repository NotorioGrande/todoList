import React from 'react';
import "./Task.css"
import {CgClose} from "react-icons/cg"

const Task = ({ task, handleTaskClick, handleTaskDeletion}) => {


    return (  
        <div 
        style={ task.completed ?{ borderLeft: "6px solid chartreuse"} : {}}
         className='task-container'>
            <div  onClick={ ()=> handleTaskClick(task.id)} className="task-title">
                {task.title}
            </div>
            <div className="buttons-container">
                <button onClick={()=> handleTaskDeletion(task.id) }
                  className='remove-task-button'>
                    <CgClose />
                  </button>
            </div>


         </div>
    );
}
  
export default Task ;