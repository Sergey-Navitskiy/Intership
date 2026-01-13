import { Users } from './components/Users'
import { Todos } from './components/Todos'
import { Pokemons } from './components/Pokemons'

function App() {
  return (
    <div>
      <h1>Redux Toolkit Multi-Store</h1>
      <Users />
      <Todos />
      <Pokemons />
    </div>
  )
}
export default App
