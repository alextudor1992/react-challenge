import { Pokemon as PokemonType } from "../types/pokemon";

type Props = Pick<PokemonType, 'name' | 'image' | 'url'>

export function Pokemon({ name, image }: Props) {
  return <div className="flex flex-col items-center p-2 hover:bg-amber-100 transition-all duration-200 ease-in-out rounded-lg">
    <img src={image} className="aspect-square size-8 object-cover"/>
    <span className="text-center text-xs capitalize">{name}</span>
  </div>
}