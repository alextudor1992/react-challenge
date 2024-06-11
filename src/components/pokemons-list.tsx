import { useState } from 'react'
import { usePokemons } from '../graphql/pokemons-query'
import { Pokemon } from './pokemon'
import { ErrorOverlay } from './error-overlay'
import { LoadingOverlay } from './loading-overlay'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'

const MAX_POKEMONS_PER_PAGE = 18

export function PokemonsList() {
  const [page, setPage] = useState(1)
  const { loading, error, data } = usePokemons(page, MAX_POKEMONS_PER_PAGE)

  const totalPokemons = Math.round((data?.pokemons?.count ?? 0) / MAX_POKEMONS_PER_PAGE)

  const next = () => setPage((page) => (page < totalPokemons ? page + 1 : page))
  const back = () => setPage((page) => (page > 2 ? page - 1 : page))

  return (
    <main className="relative flex flex-col justify-between">
      {loading && <LoadingOverlay />}
      {error?.message ? <ErrorOverlay error={error.message} /> : null}

      <div className="grid grid-cols-3 p-4 gap-3 overflow-hidden" id="pokemons-list">
        {data?.pokemons.results.map(({ name, image, url }) => (
          <Pokemon name={name} image={image} url={url} />
        ))}
      </div>

      <nav className="w-full flex justify-between items-center p-5">
        <button onClick={back} title="Previous page">
          <MdOutlineNavigateBefore size="24px" />
        </button>

        <span className="text-xs opacity-30">{`${page} / ${totalPokemons}`}</span>

        <button onClick={next} title="Next page">
          <MdOutlineNavigateNext size="24px" />
        </button>
      </nav>
    </main>
  )
}
