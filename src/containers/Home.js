import React from "react";

const Home = () => {
  return (
    <div className="container">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/images/pokemon.png'} width="400" alt="poke" />
        <h1>Poke App</h1>
        <button className="btn btn-primary">Ver Pokemon</button>
      </header>
    </div> 
   );
}
 
export default Home;
