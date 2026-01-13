import { createContext, useState } from 'react'
import React from 'react'

export const AppContext = createContext({
  user: { name: '', isAdmin: false },
  setUser: () => {},
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
})

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Sergo', isAdmin: true })
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <AppContext.Provider
      value={{ user, setUser, theme, setTheme, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  )
}
