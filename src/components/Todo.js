import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

import {
  setChecked,
  removeTodos,
  editTodo,
  setNewTodoText,
} from '../features/todoSlice';

import './Todo.css';

const Todo = props => {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');
  const { id, text, status, editStatus } = props.todoObj;

  const inputType = { default: 'checkbox', edit: 'text' };

  return (
    <div className="list-item-container">
      {editStatus ? (
        <input
          className="edit-input"
          type={inputType.edit}
          onChange={e => setEditText(e.target.value)}
          onDoubleClick={() => dispatch(setNewTodoText({ id, editText }))}
          defaultValue={text}
        />
      ) : (
        <label className={status.toString()}>
          <input
            className="todo-item-input"
            type={inputType.default}
            checked={status}
            onChange={() => dispatch(setChecked(id))}
          />
          {editStatus ? null : text}
        </label>
      )}
      <Button
        type="primary"
        className="edit-button btn"
        onClick={() => dispatch(editTodo(id))}
      >
        <EditFilled />
      </Button>
      <Button
        danger
        className="delete-button btn"
        onClick={() => dispatch(removeTodos(id))}
      >
        <DeleteFilled />
      </Button>
    </div>
  );
};

export default Todo;
