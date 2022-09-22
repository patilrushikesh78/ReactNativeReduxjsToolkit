import {createSlice} from '@reduxjs/toolkit';

let nextTodoId = 0;
const todosSlice = createSlice({
  name: 'todos',
  initialState: {todos: []},
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: nextTodoId++,
        text: action.payload,
        completed: false,
      });
    },
    deleteToDo(state, action) {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
  },
});

export const {addTodo, deleteToDo} = todosSlice.actions;
export default todosSlice.reducer;
