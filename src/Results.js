import { useEffect, useState } from "react";
import Pokemon from "./Pokemon.js";

const Results = ({ pokemons, status }) => {
  return (
    <div className="search-results">
      {!pokemons.length ? (
        <h2>Fetching Data...</h2>
      ) : (
        pokemons.map((pokemon) => (
          <Pokemon 
            name={pokemon.name}
            url={pokemon.url}
            key={pokemon.name}
          />
        ))
      )}
    </div>
  )
}

export default Results;