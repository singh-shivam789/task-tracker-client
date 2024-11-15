import React from 'react'
import Task from './Task'
export default function Main({ tasks, setTasks, setTaskClicked }) {

  return (
    <div className='main'>
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} data={task.task} setTask={setTasks} setTaskClicked={setTaskClicked} />
      })}
    </div>
  )
}
