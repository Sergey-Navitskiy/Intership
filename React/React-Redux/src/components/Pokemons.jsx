import { useSelector, useDispatch } from 'react-redux'
import { catchPokemon } from '../features/PokemonSlice.js'
import './Pokemons.css'

export const Pokemons = () => {
  const caught = useSelector((state) => state.pokemon.list)
  const dispatch = useDispatch()
  const pokes = ['Pikachu', 'Bulbasaur', 'Charmander']

  return (
    <div className="pokemon-container">
      <h3>Покемоны ({caught.length})</h3>
      {pokes.map((poke) => (
        <button key={poke} onClick={() => dispatch(catchPokemon(poke))}>
          Поймать {poke}
        </button>
      ))}
      <p>Пойманы: {caught.join(', ')}</p>
    </div>
  )
}
