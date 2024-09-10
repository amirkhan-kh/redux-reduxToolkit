import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './reducer/counter';
import { messageSlice } from './reducer/message';
import { todoSlice } from './reducer/todo'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    message: messageSlice.reducer,
    todo: todoSlice.reducer
  },
});