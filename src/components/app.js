import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
	super(props);

	this.state = {
		name: 'CoolWorld'
	}	
  }
  
  changeHandler(event) {
	this.setState({
		name: event.target.value
	})	
  }
	
  render() {
	return (
	  <div>
		<b>{this.state.name}</b><hr />
		<input onChange={(event) => {
				this.setState({
					name: event.target.value
				})	
		}} />
	 </div>
	);
  }
}

module.exports = App; 