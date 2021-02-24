import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    updateTodos: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodos: (state, action) => {
      if (state.todoList.length <= 1) {
        state.todoList = [];
      }
      const newArr = state.todoList.filter(item => item.id !== action.payload);

      state.todoList = [...newArr];
    },
    setChecked: (state, action) => {
      state.todoList.map(item => {
        if (action.payload === item.id) {
          return item.status ? (item.status = false) : (item.status = true);
        }
      });
    },
    editTodo: (state, action) => {
      state.todoList.map(item => {
        item.id === action.payload
          ? (item.editStatus = true)
          : (item.editStatus = false);
      });
    },
    setNewTodoText: (state, action) => {
      state.todoList.map(item => {
        if (item.id === action.payload.id) {
          item.text = action.payload.editText;
          item.editStatus = false;
        }
      });
    },
  },
});

export const {
  updateTodos,
  setChecked,
  removeTodos,
  editTodo,
  setNewTodoText,
} = todoSlice.actions;
export const selectTodoList = state => state.todos.todoList;
export default todoSlice.reducer;
