import React, {FunctionComponent} from 'react';
import { PokemonsList } from './pages/pokemons-list';
  //FC function  components, utilise function flechée
const App: FunctionComponent = () => {

 return (
 <div>    
   <PokemonsList/>
 </div>
 )
}
  
export default App;