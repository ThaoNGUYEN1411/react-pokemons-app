import React, {FunctionComponent} from 'react';
import { PokemonsList } from './pages/pokemons-list';
import { BrowserRouter, BrowserRouter as Link, Route, Router, Switch } from 'react-router-dom';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/pokemon-not-found';
import PokemonEdit from './pages/pokemon-edit';
  //FC function  components, utilise function flechée
const App: FunctionComponent = () => {

 return (
  <BrowserRouter>
  {/* <Router> */}
    <div>
    {/* La barre de navigation commun à tous les pages*/}
    <nav>
      <div className='nav-wrapper teal'>
        <Link to="/" className='brand-logo center'>Pokédex</Link>
      </div>
    </nav>
     {/* <PokemonsList/> */}
     <Switch>
      <Route exact path="/" component={PokemonsList} />
      <Route exact path="/pokemons" component={PokemonsList} />
      <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
      <Route exact path="/pokemons/:id" component={PokemonDetail} />
      <Route component={PageNotFound} />
     </Switch>
    </div>
 {/* </Router> */}
  </BrowserRouter>

 )
}
  
export default App;