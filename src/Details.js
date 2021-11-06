import { Component } from "react";
import { withRouter } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary.js";
import Carousel from "./Carousel.js";

class Details extends Component {
  state = { loading: true };

  async componentDidMount () {
    // console.log('Mount', this.props);
    const res = await fetch (
      `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`
    );

    const json = await res.json();

    this.setState(
      Object.assign(
        { loading: false },
        json
      )
    ) 
  }

  render () {
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
      <div className="details">
        <Carousel images={images}/>
        <h2>{name}</h2>
        <p>{abilities.map(abilityData => abilityData.ability.name).join(' - ')}</p>
        <p>{types.map(typeData => typeData.type.name).join(', ')}</p>
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