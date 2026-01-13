import { UserMenu } from './UserMenu'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Главная</li>
        <li>настройки</li>
      </ul>
      <UserMenu />
    </nav>
  )
}
