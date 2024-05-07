/* -----> Third Party Packages <----- */
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"

/* -----> Utils <----- */
// import { todoList } from '../Utils/Constants'

/* -----> External Components <----- */
import TodoItem from '../Components/TodoItem'
import useGetTodoList from '../Hooks/useGetTodoList'

/* -----> Component <----- */
const Home = () => {
  // Global State
const todoList = useSelector((state) => state.todoList)

useGetTodoList()

// Reference
const todoText = useRef()

// Methods
const handleAddTodoButton = async () => {
  const item = todoText.current.value
    const newTodo = {
      item,
      isChecked:false
  }

  const url = "https://todo-application-backend-t0hl.onrender.com/add-todo"
  const response = await axios.post(url, newTodo)
  console.log(response.data)

}


// Return JSX
  return (
    <div className='flex flex-col items-center gap-4 m-4'>

        <div className='flex gap-2 justify-center items-center'>
            <input type="text" placeholder='Enter Todo' className='border-2 rounded-md border-blue-800' ref={todoText}/>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleAddTodoButton}>Add Todo</button>
        </div>

        <div className='flex flex-col gap-2 border-2 p-4 rouded-md'>
            {todoList.map((todo) => (  
                <TodoItem key={todo._id} todoDetails={todo}/>      
            ))
            }
        </div>

    </div>
  )
}

export default Home
