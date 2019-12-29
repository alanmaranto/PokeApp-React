import React, { Component } from "react";

class PokeInfo extends Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <h1>PokeInfo</h1>
        <p>ID:{match.params.pokeIndex}</p>
      </>
    );
  }
}

export default PokeInfo;
