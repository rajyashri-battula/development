import React, {Component} from 'react';
import './App.css';
import Clothing from "./Clothing";

class DisplayList extends Component {
  render(){
    const items = this.props.items.map(itm => {
      return (<Clothing
        item = {itm}
        addToCart={this.props.addToCart}
        />
        );
    });
    if (items.length > 0) {
      return items;
    }
    else {
      return (<div style={{ marginTop: "100px"}}><h2>There are no clothes available under these filters. Please broaden your search! </h2></div>);
    }
  }
}

export default DisplayList;
