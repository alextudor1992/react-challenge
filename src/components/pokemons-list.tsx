import { useState} from 'react'
import { usePokemons } from '../graphql/pokemons-query'
import { Pokemon } from './pokemon'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

export function PokemonsList() {
  const [page, setPage] = useState(1)
  const { loading, data, error, previousData } = usePokemons(page, 18)

  const next = () => setPage(currentPage => currentPage + 1)
  const back = () => setPage(currentPage => currentPage - 1)

  const totalPages = Math.round((data?.pokemons?.count ?? previousData?.pokemons?.count ?? 10) / 10)

  return (
    <main className="relative flex flex-col justify-between">
      {loading && <LoadingOverlay/>}
      {error && <ErrorOverlay error={error.message}/>}

      <div className="grid grid-cols-3 p-4 gap-3 overflow-hidden">
        {(data ?? previousData)?.pokemons?.results?.map(({image, id, url, name}) =>
          <Pokemon key={id} name={name} image={image} url={url}/>
        )}
      </div>

      <div className="w-full flex justify-between items-center p-5">
        <button disabled={loading || page === 1} onClick={back} title="Previous page">
          <MdOutlineNavigateBefore size="24px"/>
        </button>

        <span className="text-xs opacity-30">{`${page} / ${totalPages}`}</span>

        <button disabled={loading} onClick={next} title="Next page">
          <MdOutlineNavigateNext size="24px"/>
        </button>
      </div>
    </main>)
}

function LoadingOverlay() {
  return <div className="absolute top-0 bottom-0 left-0 right-0 flex opacity-90 z-40 bg-white" aria-hidden={true}>
    <span className="m-auto">Loading...</span>
  </div>
}

function ErrorOverlay({ error }: { error: string }) {
  return <div className="absolute top-0 bottom-0 left-0 right-0 flex opacity-90 z-40 bg-red-200 flex-col items-center justify-center text-center" aria-hidden={true}>
    <span className="font-extrabold">Oops!</span>
    <span className="font-extralight">{error}</span>
  </div>
}