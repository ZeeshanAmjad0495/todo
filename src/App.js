import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import uuidv4 from 'uuid/dist/v4';
import { PlusOutlined } from '@ant-design/icons';

import TodoList from './components/TodoList';

import { updateTodos } from './features/todoSlice';

import './App.css';

const App = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const addTodo = () => {
    const inputText = inputRef.current.value.toString();
    dispatch(
      updateTodos({
        id: uuidv4(),
        text: inputText,
        status: false,
        editStatus: false,
      })
    );

    inputRef.current.value = '';
  };

  return (
    <div className="App">
      <div className="todo-primary-input">
        <input ref={inputRef} type="text" />

        <button onClick={addTodo}>
          <PlusOutlined />
        </button>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
