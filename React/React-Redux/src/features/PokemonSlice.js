import { createSlice } from '@reduxjs/toolkit'

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { list: [] },
  reducers: {
    catchPokemon: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export const { catchPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
