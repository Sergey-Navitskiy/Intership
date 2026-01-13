import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo } from '../features/TodoSlice'
import './Todos.css'
export const Todos = () => {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="todos-container">
      <h3>Список дел ({todos.length})</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTodo(text))
          setText('')
        }}
      >
        Добавить
      </button>
      <ul>
        {todos.map((t) => (
          <li
            key={t.id}
            onClick={() => dispatch(toggleTodo(t.id))}
            style={{ textDecoration: t.completed ? 'line-through' : 'none' }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
