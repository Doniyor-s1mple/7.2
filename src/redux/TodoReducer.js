import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export function getTodosFromBack() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            dispatch({
                type:getTodos.type,
                payload:res.data
            })
        })
    }
}

var d = createSlice({
    name: 'TodoReducer',
    initialState: {
        todos: [
            { id: 1, title: 'task1', completed: false },
            { id: 2, title: 'task2', completed: false },
        ]
    },
    reducers: {
        addTodo: (state, actions) => {
            state.todos.push({
                id: state.todos.length + 1,
                title: actions.payload,
                completed: false
            })
        },
        toggleTodo:(state, actions)=>{
            state.todos.map(item=>{
                if(item.id===actions.payload){
                    item.completed=!item.completed
                }
            })
        },
        getTodos:(state,actions)=>{
            state.todos= actions.payload
        }

    }
})

export const { addTodo,toggleTodo,  getTodos } = d.actions
export default d.reducer

