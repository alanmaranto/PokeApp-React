import React, { Component } from "react";
import PokeDescription from "../components/PokeDescription/PokeDescription";

class PokeInfo extends Component {
    componentDidMount(){

    }

  render() {
    const { match } = this.props;
    const url =
    "https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/";
    const pokeId = match.params.pokeIndex;

    return (
      <>
        <PokeDescription pokeImage={`${url}${pokeId}.png?raw=true`} />
      </>
    );
  }
}

export default PokeInfo;
