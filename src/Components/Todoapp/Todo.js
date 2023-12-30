import React, { useEffect, useState } from 'react'
import './Todo.css'
import Addtask from './AddTask'
import ListTask from './ListTask'

const Todo = () => {

    const [task, setTask] = useState([])

    useEffect(()=>{
        document.title = `you have ${task.length} pending task(s)`
    })

    const addTask = (title)=>{
        const newTask = [...task, title]
        setTask(newTask)
    }

    const removeTask = (index)=>{
        const deletedTask = [...task]
        deletedTask.splice(index,1)
        setTask(deletedTask)
    }


  return (
    <>
      <div className='todo-container'>
        <div className='header'>To-Do App</div>
        <div className='add-task'>
            <Addtask addTask={addTask} />
        </div>
        <div className='task'>
            {
                task.map((item,index)=>(
                    <ListTask key={index} title={item} index={index} removeTask={removeTask} />
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Todo

