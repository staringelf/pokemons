import { Component } from "react";
import { withRouter } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary.js";
import Carousel from "./Carousel.js";
import Sidebar from "./Sidebar.js";

class Details extends Component {
  state = { loading: true, pokemons: [] };

  async componentDidMount () {
    // console.log('Mount', this.props);

    const pokeRes = await fetch (
      `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`
    );


    // if (this.state.loading){
    // }

    // relatedTypes.forEach( async (type) => {
    //   const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    //   const json = await res.json();
    //   console.log(json);
    // });

    const pokeJson = await pokeRes.json();

    this.setState(
      Object.assign(
        { loading: false},
        pokeJson
      )
    )
    
    const relatedTypes = this.state.types.map(typeData => typeData.type.name);
    const relatedPokemons = this.requestPokemons(relatedTypes);

    
    // this.setState(
    //   Object.assign(
    //     { loading: false,
    //       relatedPokemons: relatedPokemons },
    //     pokeJson
    //   )
    // )
  }

  requestPokemons (types) {
  
    const relatedPokemons = {};
    
    types.forEach( async (type) => {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const { pokemon: pokemons } = await res.json();
      if (!relatedPokemons[type]){
        relatedPokemons[type] = pokemons;
      }
    });

    return relatedPokemons;


  }

  render () {

    console.log(this.state);

    if (this.state.loading === true){
      return <h2>loading...</h2>;
    }

    const { name, sprites : { other }, abilities, types } = this.state;

    const images = [];

    for (const key of Object.keys(other)) {
      for (const keyInner of Object.keys(other[key])){
        const valueInner = other[key][keyInner];
        if (valueInner) {
          images.push(valueInner);
        }
      }
    }

    return (
      <div>
        <div className="details">
          <Carousel images={images}/>
          <h2>{name}</h2>
          <p>{abilities.map(abilityData => abilityData.ability.name).join(' - ')}</p>
          <p>{types.map(typeData => typeData.type.name).join(', ')}</p>
        </div>
        <Sidebar>
          <div>
            <h1>hi</h1>
          </div>
        </Sidebar>
      </div>
    )
  }

}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary () {
  return( 
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}