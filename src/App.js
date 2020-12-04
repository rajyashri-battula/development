import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList.js';
import Cart from "./Cart";

const clothes = [
  {id: 1, name: "Halter Neck", type: "Shirt", occasion: "Party", price: 27, added: "no"},
  {id: 2, name: "Spaghetti Top", type:"Shirt", occasion: "Party", price: 19, added: "no"},
  {id: 3, name: "Cargo Pants", type:"Bottoms", occasion: "Casual", price: 45, added: "no"},
  {id: 4, name: "LBD", type:"Dress", occasion: "Party", price: 38, added: "no"},
  {id: 5, name: "Beach Dress", type:"Dress", occasion: "Casual", price: 35, added: "no"},
  {id: 6, name: "Peplum Top", type: "Shirt", occasion: "Party", price: 52, added: "no"},
  {id: 7, name: "Midi Dress", type: "Dress", occasion: "Party", price: 49, added: "no"},
  {id: 8, name: "Fit and Flare", type: "Dress", occasion: "Party", price: 28, added: "no"},
  {id: 9, name: "Satin Skirt", type: "Bottoms", occasion: "Party", price: 41, added: "no"},
  {id: 10, name: "Denim Skirt", type: "Bottoms", occasion: "Casual", price: 34, added: "no"},
  {id: 11, name: "Blouse", type: "Shirt", occasion: "Work", price: 50, added: "no"},
  {id: 12, name: "Denim Jeans", type: "Bottoms", occasion: "Casual", price: 44, added: "no"}
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
  };

  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }

  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }

  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }

  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id === productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + 1;
      this.setState({
        cart: cartItem
      });
    } else {
      selectedProducts.quantity = 1;
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }

  render() {
    return (
      <div id="body">
    		<h1> <center>Welcome back to your favourite shopping website :)</center></h1>
    		<p1><h4><center>Feel free to filter to your favourite pieces by type of clothing or by occasion! You can also sort through the clothes according to price.</center></h4></p1>
        <p1><h4><center>If you like something, don't forget to add it to your cart. Happy shopping!</center></h4></p1>
        <FilteredList
        items={clothes}
        productsList={this.state.products}
        addToCart={this.handleAddToCart}
        productQuantity={this.state.quantity}
        updateQuantity={this.updateQuantity}
        />
        <Cart
        total={this.state.totalAmount}
        totalItems={this.state.totalItems}
        cartItems={this.state.cart}
        removeProduct={this.handleRemoveProduct}
        updateQuantity={this.updateQuantity}
        productQuantity={this.state.moq}
        />
      </div>
    );
  }
}

export default App;
