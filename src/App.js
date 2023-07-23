import React,{useState} from 'react';
import './App.css';
import Task from './Task';


function App() {
  const [toDoList,setToDoList]=useState([]);
  const [newTask,setNewTask]=useState({});
  const handleNewTask=(event)=>{
    setNewTask(event.target.value);
  }
  const addTask=()=>{
    if(newTask.trim()!==""){
      const task={
        id:toDoList.length===0?1:toDoList[toDoList.length-1].id+1,
        taskName:newTask,
      }
      
      setToDoList([...toDoList,task]);
    }
    
  };

  const deleteTask=(id)=>{

    setToDoList(toDoList.filter((task)=> task.id !== id))
}
  return (
    <div className="container">
      <div className='bg-secondary app'>
        <input  onChange={handleNewTask} className="input form-control me-2" type="text" placeholder="Write Your Task" />
        <button onClick={addTask} className="btn btn-primary bouton">Add Task</button>
      </div>
      <div>
        <Task  list={toDoList} deleteTask={deleteTask}/>
        
      </div>
    </div>
  );
}

export default App;
