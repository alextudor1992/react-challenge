import { Pokemon as PokemonType } from '../types/pokemon'

type Props = Pick<PokemonType, 'name' | 'image' | 'url'>

export function Pokemon({ name, image, url }: Props) {
  return (
    <a href={url} title={name} target="_blank" rel="follow">
      <div className="flex flex-col items-center p-2 hover:bg-amber-100 transition-all duration-200 ease-in-out rounded-lg">
        <img src={image} alt={name} className="aspect-square size-8 object-cover" loading="lazy" />
        <span className="text-center text-xs capitalize">{name}</span>
      </div>
    </a>
  )
}
