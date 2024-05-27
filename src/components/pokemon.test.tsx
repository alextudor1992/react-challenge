import { expect, describe, it } from 'vitest'
import { render } from '@testing-library/react'
import { Pokemon } from "./pokemon.tsx";

describe('Pokemon', () => {
  it('renders as expected', () => {
    const name = 'Pikachu'
    const { findByText } = render(<Pokemon name={name} image={''} url={'#'} />)
    expect(findByText(name)).resolves.toBeInTheDocument();
  })
})