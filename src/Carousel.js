import { Component } from "react";

class Carousel extends Component {
  state = { active: 0 };

  static defaultProps = {
    images: ["/images/pokemons-default.jpg"]
  }

  render () {

    const { images } = this.props;

    return (
      <div className="carousel">
      {images.map(image => (
        <img src={image} alt="pokemon-image" />
      ))}
      </div>
    )
  }


}


export default Carousel;