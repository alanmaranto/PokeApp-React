import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/images/pokemon.png'} width="400" alt="poke" />
        <h1>Poke App</h1>
        <Link to='/pokemons'>Ver Pokemons</Link>
      </header>
    </div> 
   );
}
 
export default Home;
