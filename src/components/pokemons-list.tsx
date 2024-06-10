import { useState } from 'react'
import { usePokemons } from '../graphql/pokemons-query'
import { Pokemon } from './pokemon'
import { ErrorOverlay } from './error-overlay'
import { LoadingOverlay } from './loading-overlay'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'

export function PokemonsList() {
  const loading = true
  const error: { message: string | null } = { message: null }

  const next = () => {}
  const back = () => {}

  return (
    <main className="relative flex flex-col justify-between">
      {loading && <LoadingOverlay />}
      {error?.message ? <ErrorOverlay error={error.message} /> : null}

      <div className="grid grid-cols-3 p-4 gap-3 overflow-hidden" id="pokemons-list"></div>

      <nav className="w-full flex justify-between items-center p-5">
        <button onClick={back} title="Previous page">
          <MdOutlineNavigateBefore size="24px" />
        </button>

        <span className="text-xs opacity-30">{`0 / 0`}</span>

        <button onClick={next} title="Next page">
          <MdOutlineNavigateNext size="24px" />
        </button>
      </nav>
    </main>
  )
}
