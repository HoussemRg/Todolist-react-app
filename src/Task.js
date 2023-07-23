import React from "react";
import './App.css';

function Task(props){
    
    return(
        <>
            {props.list.map((task)=>{
             return(
                < div className='app'>
                    <h2>{task.taskName}</h2>
                    <button onClick={()=>props.deleteTask(task.id)} className="bouton btn btn-warning">X</button>
                </div>
             ) 
             
          })}

        </>
        
    )
}

export default Task