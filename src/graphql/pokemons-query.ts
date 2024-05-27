import { gql, useQuery } from "@apollo/client";
import { Pokemon } from "../types/pokemon";


type PokemonsRequest = {
  limit: number
  offset: number
}

type PokemonsResponse = {
  pokemons: {
    count: number
    results: Pokemon[]
  }
}

const query = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        url
        name
        image
      }
    }
  }`;

export function usePokemons(page: number, count: number) {
  return useQuery<PokemonsResponse, PokemonsRequest>(query, {
    variables: {
      limit: count,
      offset: (page - 1) * count
    }
  })
}