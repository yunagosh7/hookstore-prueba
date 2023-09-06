import { useState } from 'react'
import './App.css'
import { useHookstate } from '@hookstate/core'
import { globalTodos } from './states/TodosState'
import { Todo } from '../types';

function App() {
  const todos = useHookstate(globalTodos);
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)
  const handleSave = () => {
    const todo: Todo = {
      title,
      completed
    }
    todos.merge([todo]);
    
  }
  return (
    <>
    <br />
    <br />
    <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} />
    <input checked={completed} onClick={() => setCompleted(!completed)} type="checkbox" />
    <button onClick={handleSave}>Guardar</button>
    <br />
    <br />
      {todos.get().map(todo => (
        <div key={todo.title} style={{background:"#48e", color:"white", marginBottom: 8}}>
        <h1 style={{padding: 0, margin: 0}}>{todo.title}</h1>
          <h3>{todo.completed ? "completo" : "no completo"}</h3>
        </div>
      ))}
    </>
  )
}

export default App
