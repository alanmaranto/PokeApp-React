import React, { Component } from "react";
import axios from "axios";

class HomeContainer extends Component {
  componentDidMount() {
      axios.get('https://pokeapi.co/api/v2/pokemon/8/').then(res => {
          console.log(res)
      }).catch(console.log)
  }

  render() {
    return <h1>PokeApp</h1>;
  }
}

export default HomeContainer;
