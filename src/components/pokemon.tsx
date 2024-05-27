import { Pokemon as PokemonType } from "../types/pokemon.ts";

type Props = Pick<PokemonType, 'name' | 'image' | 'url'>

export function Pokemon({ url, name, image }: Props) {
  return <a href={url} target="_blank" rel="nofollow" title={name} className="flex flex-col items-center p-2 hover:bg-amber-100 transition-all duration-200 ease-in-out rounded-lg">
    <img src={image} alt={name} loading="lazy" className="aspect-square size-8 object-cover"/>
    <span className="text-center text-xs capitalize">{name}</span>
  </a>
}