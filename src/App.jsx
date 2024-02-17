import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {  useSelector } from 'react-redux'

function App() {
  // const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  const todos = useSelector(state => state.todos)



  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))

  // }, [todos])
  
  

  return (
    
    <div className='home'>
      <div className='container'>
          <h1>Task Manager</h1>
          <TodoForm/>
          {
            todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
          }
      </div>

    </div>
    
  )
}

export default App