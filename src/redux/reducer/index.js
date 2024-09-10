import { combineReducers } from '@reduxjs/toolkit';
import { messageSlice } from './message';
import { counterSlice } from './counter';
import { todoSlice } from './todo'

export const rootReducers = combineReducers({
    count: counterSlice, 
    message: messageSlice,
    todo: todoSlice
});