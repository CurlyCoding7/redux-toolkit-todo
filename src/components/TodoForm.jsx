import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo("");

  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
       <input type="text" placeholder='Write here' value={todo} onChange={(e) => setTodo(e.target.value)} />
       <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm