import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Tasks from "./components/Tasks"
import AddTask from './components/AddTask';



import Header from './components/Header';

import "./App.css"
const App = () =>{
    //let message = 'hello world';
    const [tasks, setTasks] = useState([]);
    

    const handleTaskClick = ( taskId) =>{
        const newTasks = tasks.map( task =>{
            if (task.id === taskId) return{ ...task, completed : !task.completed};
            else return task;

        })
        setTasks(newTasks);
    }

    const todoFilterFunction = (task) => {
        if(!task.completed) return true;
    }
    const doneFilterFunction = (task) => {
        if(task.completed) return true;
    }

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter(task =>{
            return (task.id !== taskId);
        });
        setTasks(newTasks);
        
    }
    const handleTaskAddition = (taskTitle) =>{
        if (taskTitle.trim() === ""){
            return;
        }
        const newTasks = [...tasks, {
            title: taskTitle,
            id: uuidv4(),
            completed: false
        }];
        setTasks(newTasks);
        
    }

    return (
        <Router>
            <div className="container">
            <Header />
            <Routes>
            <Route path="/" exact element={
                    <>
                    <AddTask handleTaskAddition={handleTaskAddition} />
                    <div className='tasks-container'>
                    <div className="todo-container">
                        <h2>Pendente</h2>
                    <Tasks tasks={tasks}
                        handleTaskClick={handleTaskClick}
                        handleTaskDeletion={handleTaskDeletion}
                        filterFunction={todoFilterFunction}
                      />
                    </div>
                    <div className="done-container">
                        <h2>Concluído</h2>
                    <Tasks tasks={tasks}
                        handleTaskClick={handleTaskClick}
                        handleTaskDeletion={handleTaskDeletion}
                        filterFunction={doneFilterFunction}
                        />
                
                    </div>
                    </div>
                    </>
            } /> 
            
        </Routes>
            </div>
        </Router>
    );
};
export default App;