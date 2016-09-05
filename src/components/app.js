import React, { Component } from 'react';
import './../../style/style.css';

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
		<div className="header">{this.state.name}</div>
		<hr />
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