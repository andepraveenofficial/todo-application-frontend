import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice";

const appStore = configureStore({
    reducer:{
        //   Reducers
        todoList:todoSlice
    }
})

export default appStore