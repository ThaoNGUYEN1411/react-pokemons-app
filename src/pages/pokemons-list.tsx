import React, { FunctionComponent} from 'react'
import { PokemonCard } from '../components/pokemon-card';
import usePokemons from '../hooks/pokemon-hooks';

export const PokemonsList: FunctionComponent = () => {
//si deux composents utilisent la meme hook, ils auraient 2 etats diffirents
  const pokemons = usePokemons();

  return (
     <div>    
    <h1 className='center'>Pokédex</h1>
    <div className='container'>
     <div className='row'>
       {pokemons.map((pokemon)=>(
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
       )           
       )}
     </div>
    </div>
    
  </div>
  )
}
