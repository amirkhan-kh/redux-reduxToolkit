import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todo: ["Ahmad", "Muhsin", "Bekzod"],
    inputValue: ""
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {state.todo.push(action.payload)},
        todoDelete: (state, action) => {state.todo = state.todo.filter((item) => item !== action.payload)},
          
    }
})

export const { add, todoDelete} = todoSlice.actions;
export default todoSlice.reducer;