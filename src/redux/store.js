import { configureStore } from "@reduxjs/toolkit";
import  TodoReducer  from "./TodoReducer";

export default configureStore({
    reducer: TodoReducer
})