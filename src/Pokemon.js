const Pokemon = ({name, url}) => {
  return (
    <a href={url} target="_blank">
      <div className="pokemon-card">
        <h3>{name}</h3>
      </div>
    </a>
  )
}

export default Pokemon;