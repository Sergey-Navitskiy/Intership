import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: { name: 'Гость', isLogged: false },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name
      state.isLogged = true
    },
    logout: (state) => {
      state.name = 'Гость'
      state.isLogged = false
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
