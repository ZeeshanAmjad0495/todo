import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';

import { selectTodoList } from '../features/todoSlice';

const TodoList = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div>
      {todoList.map(({ id, text, status, editStatus }) => (
        <Todo key={id} todoObj={{ id, text, status, editStatus }} />
      ))}
    </div>
  );
};

export default TodoList;
