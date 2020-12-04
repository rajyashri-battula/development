import React, {Component} from 'react';
import './App.css';

class Clothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      isAdded: false
    };
  }
  addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id
        }
      },
      function() {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 3500);
      }
    );
  }
  render() {
    let image = "images/" + this.props.item.id + ".jpg";
    let name = this.props.item.name;
    let price = this.props.item.price;
    let id = this.props.item.id;
    return (
      <div className="clothing-box">
        <p><img src={image} alt={name}></img></p>
        <h4>{this.props.item.ocassion} {name}</h4>
        <h4 id="price">${price}</h4>
        <button
          className={!this.state.isAdded ? "" : "added"}
          type="button"
          onClick={this.addToCart.bind(
            this,
            image,
            name,
            price,
            id
          )}
        >
        <h4>{!this.state.isAdded ? "Add to cart!" : "Added"}</h4>
        </button>
      </div>
    );
  }
}

export default Clothing;
