import { Link } from "react-router-dom";

const Pokemon = ({name, url}) => {
  return (
    <Link to={`details/${name}`}>
      <div className="pokemon-card">
        <h3>{name}</h3>
      </div>
    </Link>
  )
}

export default Pokemon;