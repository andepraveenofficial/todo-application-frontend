import { createSlice } from "@reduxjs/toolkit";


/* -----> Utils <----- */
// import { todoList } from "../Utils/Constants";


const initialState = [{_id:0, item:"Todo Testing", isChecked:false}]
const todoSlice = createSlice({
name:"todo",
initialState,
reducers:{
    // actions 
    addTodoList:(state,action)=>{
        // state.push(action.payload)
        const todolist = action.payload
        return todolist
}
}});

export const {addTodoList} = todoSlice.actions
export default todoSlice.reducer