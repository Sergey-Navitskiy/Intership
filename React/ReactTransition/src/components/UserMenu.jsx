import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const UserMenu = () => {
  const { user, theme, toggleTheme } = useContext(AppContext)

  return (
    <div
      className="user-menu"
      style={{ border: '1px solid orange', padding: '5px' }}
    >
      <p>
        Привет, <strong>{user.name}</strong>!
      </p>
      <p>Статус: {user.isAdmin ? 'Админ' : 'Пользователь'}</p>
      <button onClick={toggleTheme}>
        Переключить на {theme === 'light' ? 'Тёмную' : 'Светлую'} тему
      </button>
    </div>
  )
}
export default UserMenu
