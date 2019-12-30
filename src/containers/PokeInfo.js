import React, { Component } from "react";
import PokeDescription from "../components/PokeDescription/PokeDescription";

import Axios from 'axios';

class PokeInfo extends Component {
    componentDidMount(){
      //peticion con axios
      const { match } = this.props;
      const descriptionId = match.params.pokeIndex;
      const pokeDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${descriptionId}/`;
      Axios.get(pokeDescriptionUrl)
        .then(res => console.log(res.data.flavor_text_entries[11].flavor_text))
    }

  render() {
    const { match } = this.props;
    const url =
    "https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/";
    const pokeId = match.params.pokeIndex;
    const pokeName = match.params.pokeName;

    return (
      <>
        <PokeDescription pokeImage={`${url}${pokeId}.png?raw=true`} pokeName={pokeName} />
      </>
    );
  }
}

export default PokeInfo;
