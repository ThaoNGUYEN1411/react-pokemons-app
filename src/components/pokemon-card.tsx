import React, {FunctionComponent} from 'react'

export const pokemonCard:FunctionComponent = (pokemon) => {
  return (
    <div>{pokemon.name}</div>
  )
}
