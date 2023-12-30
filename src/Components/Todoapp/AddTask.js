import React, { useState } from 'react'

const Addtask = ({addTask}) => {

    const [values, setValues] = useState('')

    const addValues = (values)=>{
        if (values.trim().length > 0) {
            addTask(values)
            setValues('')
        }
    }

  return (
    <>
      <div className='input-container'>
        <input value={values} onChange={(e)=>{setValues(e.target.value)}} className='input' type="text" />
        <button onClick={()=>{addValues(values)}} className='add-btn'>ADD</button>
      </div>
    </>
  )
}

export default Addtask
