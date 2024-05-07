/* -----> Third Party Packages <----- */
import React from 'react'


/* -----> Component <----- */
const TodoItem = ({todoDetails}) => {
    const {item, isChecked} = todoDetails

  return (
            <div  className='flex gap-2 justify-center items-center'>
                <input type="checkbox" defaultChecked={isChecked}/>
                <span style={isChecked ? {textDecoration: 'line-through'} : {}}>{item}</span>
                <button type="button" className="text-white bg-gray-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Edit</button>
                <button type="button" className="text-white bg-red-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Delete</button>
            </div>
         )
        }

/* -----> Export <----- */
export default TodoItem