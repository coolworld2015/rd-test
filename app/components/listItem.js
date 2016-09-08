import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
	super(props);

	this.state = {
 
	}	
  }
	render() {
		return (
			<div>
				<h4>{this.props.id} - {this.props.name}</h4>
				<hr/>
			</div>
		);
	}
}

module.exports = ListItem;