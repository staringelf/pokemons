import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  state = { loading: true };

  async componentDidMount () {
    // console.log('Mount', this.props);
    const res = await fetch (
      `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`
    );

    const json = await res.json();

    console.log(json);
    
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

    const { name, sprites, abilities, types } = this.state;

    return (
      <div className="details">
        <div className="image-container">
          <img src={sprites.front_default} />
        </div>
        <h2>{name}</h2>
        <p>{abilities.map(abilityData => abilityData.ability.name).join(' - ')}</p>
        <p>{types.map(typeData => typeData.type.name).join(', ')}</p>
      </div>
    )
  }

}



export default withRouter(Details);