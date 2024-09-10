import { createSlice } from '@reduxjs/toolkit';

const initialState = { str: "React.js update" };

export const messageSlice = createSlice({
    name: "message", 
    initialState,
    reducers: {
        changeStr: (state, action) => { 
            state.str = action.payload;
        }
    }
});

export const { changeStr } = messageSlice.actions;
export default messageSlice.reducer; 