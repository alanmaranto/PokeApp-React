import React from "react";

const List = ({ pokeData }) => {
    return (
        <>
            <h1>Lista de pokemons</h1>
            <ul>
                {pokeData.map((pokemon, index) => {
                    return (
                    <li key={index}>
                        {pokemon.name}
                        {' '}
                        <a href={pokemon.url}>{pokemon.name}</a>
                    </li>
                    );
                })}
            </ul>
        </>
    );
};

export default List;
