import React, { Component } from "react";
import PokeDescription from "../components/PokeDescription/PokeDescription";
import AppNav from '../components/AppNav/AppNav';

import Axios from "axios";

const initialState = {
  pokemonDescription: undefined
};

class PokeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {

    //peticion con axios
    const { match } = this.props;
    const descriptionId = match.params.pokeIndex;
    const pokeDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${descriptionId}/`;
    Axios.get(pokeDescriptionUrl).then(res => {
      const { flavor_text_entries } = res.data;
      this.setState({
        pokemonDescription: flavor_text_entries[11].flavor_text
      });
      console.log(this.state.pokemonDescription)
    });
  }

  render() {
    const { match } = this.props;
    const url =
      "https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/";
    const pokeId = match.params.pokeIndex;
    const pokeName = match.params.pokeName;
    const { pokemonDescription } = this.state;

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
