import React, {Component} from 'react';
import './App.css';

class Clothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: {}, //selected to add to cart
      added: false //boolean for if item is added to cart
    };
  }

  addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        itemSelected: {
          name: name,
          id: id,
          price: price,
          image: image
        }
      },
      function() {
        this.props.addToCart(this.state.itemSelected);
      }
    );

    this.setState(
      {
        added: true
      },
      function() { //once item is added, add button text changes to "added" and changes back to "add" after 2 seconds
        setTimeout(() => {
          this.setState({
            added: false,
            itemSelected: {}
          });
        }, 2000);
      }
    );
  }

  render() { //renders each clothing item in product list, along with all attributes, and add to cart button
    let image = "images/" + this.props.item.id + ".jpg";
    let name = this.props.item.name;
    let price = this.props.item.price;
    let id = this.props.item.id;
    let type = this.props.item.type;
    let occasion = this.props.item.occasion;
    return (
      <div className="clothing-box">
        <p><img src={image} alt={name}></img></p>
        <h4>{name}</h4>
        <h5><b>Type: </b>{type}, <b>Occasion: </b>{occasion}</h5>
        <h4 id="price">${price}</h4>
        <button
          className={!this.state.added ? "" : "added"}
          type="button"
          onClick={this.addToCart.bind(this, image, name, price,id)}
        >
        <h4>{!this.state.added ? "Add to cart!" : "Added"}</h4>
        </button>
      </div>
    );
  }
}

export default Clothing;
