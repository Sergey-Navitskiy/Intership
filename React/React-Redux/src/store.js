import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoSlice'
import userReducer from './features/UserSlice'
import pokemonReducer from './features/PokemonSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
    pokemon: pokemonReducer,
  },
})
