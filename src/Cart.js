import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {cart: this.props.cartItems}
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    const positions = this.refs.scrollbars.getValues();
    if (positions.top >= 1) {
      event.stopPropagation();
    }
  }

  render() {
    let cartItems;
    cartItems = this.state.cart.map(item => {
      return ( //all cart item attributes
        <li className="cart-item" key={item.name}>
          <img className="item-image" alt="" src={item.image} />
          <div>
            <p className="item-name">{item.name}</p>
            <p className="item-price">${item.price}</p>
          </div>
          <div> //aggregator
            <p>{"Qty:"} {item.quantity} {" "}</p>
            <p>{"Total: $"}{item.quantity * item.price}</p>
          </div> //remove button
          <a className="item-remove" href="#" onClick={this.props.removeProduct.bind(this, item.id)}>
            ×
          </a>
        </li>
      );
    });
    let view; //empty cart rendering
    if (cartItems.length <= 0) {view = <img width = "95%" src ="images/cart_empty.png" alt="empty-cart"/>;
  } else { //non-empty cart rendering
      view = (
        <ul>
          {cartItems}
        </ul>
      );
    }
    return (
      <div className="container">
          <table>
            <tbody>
              <tr>
                <td>No. of items: </td> //aggregator
                <td><b>{this.props.totalItems}</b></td>
              </tr>
              <tr>
                <td>Total: </td> //main aggregator 
                <td><b>{this.props.total}</b></td>
              </tr>
            </tbody>
          </table>
          <div className="cart-view">
          <Scrollbars style={{ width: 360, height: 320 }} ref="scrollbars">
            {this.props.children}{view}
          </Scrollbars>
          </div>
      </div>
    );
  }
}

export default Cart;
