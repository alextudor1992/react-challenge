import './index.css'
import { PokemonsList } from './components/pokemons-list.tsx'
import { RxHamburgerMenu } from 'react-icons/rx'

function App() {
  return (
    <div className="app bg-white flex flex-col rounded-xl overflow-y-scroll">
      <header className="header py-3 px-5 flex justify-between items-end">
        <span>Pokemons</span>
        <RxHamburgerMenu size="24px" className="cursor-pointer" />
      </header>
      <PokemonsList />
      <footer className="text-xs flex justify-center items-center pb-3 pt-1 gap-1 text-gray-500">
        Powered by{' '}
        <a href="https://pokeapi.co/" className="underline">
          <img
            className="h-5"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          />
        </a>
      </footer>
    </div>
  )
}

export default App
