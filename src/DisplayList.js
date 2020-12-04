import React, {Component} from 'react';
import './App.css';
import Clothing from "./Clothing";

class DisplayList extends Component {
  render(){ //maps each product from App.js to an HTML element or Component for rendering purpose. Actually displays the item according to selected filters and sorting. 
    const items = this.props.items.map(item => {
      return (<Clothing
        item = {item}
        addToCart={this.props.addToCart}
        />
        );
    });
    if (items.length > 0) {
      return items;
    }
    else {
      return (<div style={{ marginTop: "100px"}}>
      <h2>There are no clothes available under these filters. Please broaden your search!
      </h2></div>
      );
    }
  }
}

export default DisplayList;
