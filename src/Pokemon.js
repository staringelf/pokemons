import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pokemon = ({name, url}) => {

  const [pokemon, setPokemon] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect (() => {
    requestPokemonData();
  }, [])

  async function requestPokemonData () {

    const res = await fetch (
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const json = await res.json();

    setPokemon(json);
    setStatus("loaded");
  }
  
  if (status === 'loaded'){

    const { sprites: { other : { dream_world } } , abilities, types } = pokemon;
    
    console.log(dream_world);

    return (
      <div className="pokemon-card-wrapper">
        <Link className="pokemon-card" to={`details/${name}`}>
          <div className="card-image">
            <img src={dream_world.front_default} />  
          </div>
          <h3>{name}</h3>
        </Link>
      </div>
    )
  } else {
    return '';
  }
}



export default Pokemon;