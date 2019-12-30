import React, { Component } from "react";
import PokeDescription from "../components/PokeDescription/PokeDescription";
import AppNav from '../components/AppNav/AppNav';

import Axios from "axios";

const initialState = {
  pokemonDescription: undefined,
  pokeName: undefined,
  pokeId: undefined

};

class PokeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {

    //peticion con axios
    const { match } = this.props;
    const pokeId = match.params.pokeIndex;
    const pokeName = match.params.pokeName;
    const pokeDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${pokeId}/`;
    Axios.get(pokeDescriptionUrl).then(res => {
      const { flavor_text_entries } = res.data;
      this.setState({
        pokemonDescription: flavor_text_entries[11].flavor_text,
        pokeName,
        pokeId
      });
      console.log(this.state.pokemonDescription)
    });
  }

  render() {
    const url = `${process.env.REACT_APP_POKEMON_ART}`
    const { pokemonDescription, pokeName, pokeId } = this.state;

    return (
      <>
        <AppNav />
        <PokeDescription
          pokeImage={`${url}${pokeId}.png?raw=true`}
          pokeName={pokeName}
          pokeDescription={pokemonDescription}
        />
      </>
    );
  }
}

export default PokeInfo;
