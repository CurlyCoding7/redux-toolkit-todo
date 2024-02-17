import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, updateTodo } from '../features/todo/todoSlice';

const TodoItem = ({todo}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);

  const dispatch = useDispatch();

  const editTodo = () => {
    dispatch(updateTodo({id: todo.id, text: todo.text}))
    setIsEditable(false);
  }

  const toggleCompleted = () => {
    dispatch(toggleComplete(todo.id))
  }

  const handleEditSave = () => {
    if(todo.completed) return;

    if(isEditable){
        editTodo();
    }
    else{
        setIsEditable(prev => !prev);
    }
  }

  return (
    <div className="todo-item" style={isEditable?{backgroundColor: 'skyblue'}: undefined}>
        <input id="check-input" type="checkbox" onChange={toggleCompleted} checked={todo.completed} />
        <input id='text-input' type="text" value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isEditable} 
        className={todo.completed ? "completed" : ""}  style={isEditable?{backgroundColor: 'skyblue'}: undefined} />
        <button onClick={handleEditSave} id='update-button' disabled={todo.completed}>{isEditable ? "Save" : "Edit"}</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))} id='delete-button'>X</button>
    </div>
  )
}

export default TodoItem