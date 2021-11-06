import { Component } from "react";

class Carousel extends Component {
  state = { active: 0 };

  static defaultProps = {
    images: ["/images/pokemons-default.jpg"]
  }

  handleIndexClick = (event) => {
    let target = event.target;
    if (target.matches('img')){
      target = target.parentNode;
    }
    this.setState({ active: +target.dataset.index })
  }

  render () {
    const { active } = this.state
    const { images } = this.props;

    return (
      <div className="carousel">
        <div className="pokemon-hero">
          <img src={images[active]} alt="pokemon" />
        </div>
        <div className="pokemon-thumbnails">
          {images.map((image, index) => (
            <div className={`pokemon-thumbnail ${index === active ? "active" : ""}`} 
                 data-index={index}
                 onClick={this.handleIndexClick}
                 key={image}>
              <img 
                src={image} 
                alt="pokemon-thumbnail" 
              />
            </div>
          ))}
        </div>
      </div>
    )
  }


}


export default Carousel;