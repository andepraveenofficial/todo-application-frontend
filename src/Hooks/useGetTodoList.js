
import { useDispatch } from 'react-redux'
import { addTodoList } from '../Store/todoSlice'

const useGetTodoList = () => {
     // Global State
     const dispatch = useDispatch()

     // Methods
     const getTodoList = async () => {
       const url = "https://todo-application-backend-t0hl.onrender.com/todolist"
         const response = await fetch(url)
        const data = await response.json()
       //  console.log(data)
       dispatch(addTodoList(data))
     }

     getTodoList()
   
}

export default useGetTodoList
