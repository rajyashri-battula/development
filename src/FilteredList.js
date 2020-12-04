import React, { Component } from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import DisplayList from './DisplayList';
import './App.css';

class FilteredList extends Component{
	constructor(props){ //We will be keeping track of the selected size as a state. A state is a variable which is remembered when the component re-renders
		super(props);
		this.state = {
			type: "All",
			occasion: "All",
			sort: "None"
		};
	}

	onFilterType = (event) => {
		this.setState({type: event});
	}

	onFilterOccasion = (event) => {
	  this.setState({occasion: event});
	}

	onSort = (event) => {
		this.setState({sort: event});
	}

	filterItem = (item) => {
		  if (this.state.type === "All" || item.type === this.state.type || this.state.type === ""){
	     return 1;
	    }
	}

	filterOccasion = (item) => {
	  if (this.state.occasion === "All" || item.occasion === this.state.occasion || this.state.occasion === ""){
	      return 1;
	    }
	}

	sortPrice = (p1, p2) => {
		if (this.state.sort === "") {
	      return 0;
	    } else if (this.state.sort === "Low to High"){
	      return p1.price - p2.price;
	    } else if (this.state.sort === "High to Low"){
	      return p2.price - p1.price;
	    }
	}

  render(){
    return (
			<div>
        <div className = "filter">
          <DropdownButton id= "typeDropdown" title={"Type"}>
            <MenuItem eventKey= "All" onSelect={this.onFilterType}>All</MenuItem>
            <MenuItem eventKey= "Shirt" onSelect={this.onFilterType}>Shirt</MenuItem>
            <MenuItem eventKey= "Bottoms" onSelect={this.onFilterType}>Bottoms</MenuItem>
            <MenuItem eventKey= "Dress" onSelect={this.onFilterType}>Dress</MenuItem>
          </DropdownButton>
          <DropdownButton id= "typeDropdown" title={"Occasion"}>
            <MenuItem eventKey= "All" onSelect={this.onFilterOccasion}>All</MenuItem>
            <MenuItem eventKey= "Party" onSelect={this.onFilterOccasion}>Party</MenuItem>
            <MenuItem eventKey= "Casual" onSelect={this.onFilterOccasion}>Casual</MenuItem>
            <MenuItem eventKey= "Work" onSelect={this.onFilterOccasion}>Work</MenuItem>
          </DropdownButton>
					<DropdownButton id= "typeDropdown" title={"Sort by Price"}>
            <MenuItem eventKey= "Low to High" onSelect={this.onSort}>Low to High</MenuItem>
            <MenuItem eventKey= "High to Low" onSelect={this.onSort}>High to Low</MenuItem>
						<MenuItem eventKey= "None" onSelect={this.onSort}>None</MenuItem>
          </DropdownButton>
					<Button id= "checkout" title={"Checkout"}>Checkout!
          </Button>
        </div>
				<div className = "display-items">
					<DisplayList
					items={this.props.items.filter(this.filterItem).filter(this.filterOccasion).sort(this.sortPrice)} displayed = {this.props.items.filter(this.filterItem).filter(this.filterOccasion)}
					addToCart={this.props.addToCart}
					/>
				</div>
			</div>
    );
  }
}

export default FilteredList;
