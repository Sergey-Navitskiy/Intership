import { createSlice } from '@reduxjs/toolkit'

const TodosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false })
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
  },
})
export const { addTodo, toggleTodo } = TodosSlice.actions
export default TodosSlice.reducer
