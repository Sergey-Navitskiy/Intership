import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../features/UserSlice'
import './Users.css'

export const Users = () => {
  const { name, isLogged } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  return (
    <div className="user-container">
      <h3>Профиль: {name}</h3>
      {isLogged ? (
        <button onClick={() => dispatch(logout())}>Выйти</button>
      ) : (
        <button onClick={() => dispatch(login('Alex'))}>Войти как Alex</button>
      )}
    </div>
  )
}
