import React, { Component } from "react";
import List from "../components/List/List";
import axios from "axios";
import AppNav from "../components/AppNav/AppNav";

class PokeList extends Component {
  state = {
    pokeData: []
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
        const pokeResults = res.data.results;

        this.setState({ pokeData: pokeResults });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const url =
      "https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/";
    const { pokeData } = this.state;
    return (
      <>
        <AppNav />
        <List pokeData={pokeData} url={url} />
      </>
    );
  }
}

export default PokeList;
