import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Nav } from './Nav'

export const Header = () => {
  const { theme } = useContext(AppContext)

  return (
    <header
      style={{
        background: theme === 'dark' ? '#333' : '#eee',
        padding: '10px',
      }}
    >
      <h2>Шапка сайта</h2>
      <Nav />
    </header>
  )
}
