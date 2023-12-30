import React from 'react'

const ListTask = ({title,index,removeTask}) => {

    const deleteList = (index)=>{
        removeTask(index)
    }

  return (
    <>
      <div className='list-tasks'>
        {title} 
        <button onClick={()=>{deleteList(index)}} className='delete-btn'>Delete</button>
      </div>
    </>
  )
}

export default ListTask
