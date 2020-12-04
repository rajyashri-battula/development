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
      return (
        <li className="cart-item" key={item.name}>
          <img className="item-image" alt = "cart items" src={item.image} />
          <div className="item-info">
            <p className="item-name">{item.name}</p>
            <p className="item-price">{item.price}</p>
          </div>
          <div className="item-total">
            <p className="quantity">
              {"Qty"} {item.quantity} {" "}
            </p>
            <p className="amount">{item.quantity * item.price}</p>
          </div>
          <a
            className="item-remove"
            href="#"
            onClick={this.props.removeProduct.bind(this, item.id)}
          >
            ×
          </a>
        </li>
      );
    });
    let view;
    if (cartItems.length <= 0) {view = <img width = "95%" src ="images/cart_empty.png" alt="empty-cart"/>;
    } else {
      view = (
        <ul className="cart-items">
          {cartItems}
        </ul>
      );
    }
    return (
      <div className="container">
        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{this.props.totalItems}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{this.props.total}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="cart-view"
          >
          <Scrollbars style={{ width: 360, height: 320 }} ref="scrollbars">
            {this.props.children}{view}
          </Scrollbars>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
