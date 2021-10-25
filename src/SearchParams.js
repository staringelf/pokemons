import { useState, useEffect } from "react";
import Results from "./Results.js";

const TYPES = ["fire", "poison", "electric", "water", "ice"];
const localCache = {};

const SearchParams = () => {
  
  const [types, setTypes] = useState(TYPES);
  const [type, setType] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    requestTypes();
  }, [])

  async function requestTypes () {
    const res = await fetch ('https://pokeapi.co/api/v2/type/');
    const json = await res.json();
    setTypes(json.results.map(type => type.name));
  }

  useEffect(() => {
    requestPokemons();
  }, [type]);

  async function requestPokemons () {
    setPokemons([]);
    if (localCache[type]){
      setPokemons(localCache[type]);
      return;
    }
    const endpoint = type ? `type/${type}` : 'pokemon';
    const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
    const json = await res.json();
    localCache[type] = json.pokemon ? json.pokemon.map(pokemon => pokemon.pokemon) : json.results;
    setPokemons(localCache[type]);
  }
  
  return (
    <div className="search-params">
      <form>
        <label htmlFor="type">
          Type
          <select 
            id="type" 
            value={type}
            onChange={(e) => setType(e.target.value)}
            onBlur={(e) => setType(e.target.value)}
          >
            <option />
          
            {types.map((type) => (
              <option value={type} key={type}> 
                {type} 
              </option>
            ))}
          </select>
        </label>
      </form>
      <Results pokemons={pokemons} />
    </div>
  )
}

export default SearchParams;