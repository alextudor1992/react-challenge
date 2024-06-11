import { expect, describe, it } from 'vitest'
import { render } from '@testing-library/react'
import { Pokemon } from './pokemon'

describe('Pokemon', () => {
  it('renders as expected', () => {
    const name = 'Pikachu'
    const { findByText } = render(<Pokemon name={name} image="#" url="#" />)
    expect(findByText(name)).resolves.toBeInTheDocument()
  })

  it('renders the image', () => {
    const name = 'Pikachu'
    const { findByAltText } = render(<Pokemon name={name} image="#" url="#" />)
    expect(findByAltText(name)).resolves.toBeInTheDocument()
  })
})
