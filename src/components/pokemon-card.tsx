import React, {FunctionComponent, useState} from 'react';
import Pokemon from '../models/pokemon';
import  formatDate  from '../helpers/format-date';
import './pokemon-card.css';
import formatType from '../helpers/format-type';
import { Link, useHistory } from 'react-router-dom';
//declarer type de props

type Props = {
  pokemon: Pokemon,
  borderColor: string,
}

export const PokemonCard:FunctionComponent<Props> = ({pokemon, borderColor="#009688"}) => {

  const [color, setColor] = useState<string>();
  const history = useHistory();

  const showBorder = ()=>{
    setColor(borderColor);
  }

  const hideBorder = () =>{
    setColor("#f5f5f5")
  }

  const gotoPokemon = (id:number) =>{
    history.push(`/pokemons/${id}`)
  }
  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div className='col s6 m4' key={pokemon.id} onClick={()=>gotoPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder} >
      <div className='card horizontal' style={{borderColor:color}}>
        <div className='card-image'>
          <img src={pokemon.picture} alt={pokemon.name} />
          
        </div>
          <div>
            <div className="card-stacked">
            <div className='card-content'>
              <p>{pokemon.name}</p>
              <p><small>{formatDate(pokemon.created)}</small></p>
              {pokemon.types.map((type)=>(
                <p key={type} className={formatType(type)} style={{margin:'5px'}}>{type}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
