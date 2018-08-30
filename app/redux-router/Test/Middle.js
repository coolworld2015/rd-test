import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addDec } from './actions';

const mapStateToProps = ({decks, items, loader}) => ({
    decks,
    items,
	loader
});

const mapDispatchToProps = (dispatch) => ({
    addDeck: (name) => dispatch(addDeck(name))
});

class Middle extends Component {
    constructor(props) {
        super(props);
		console.dir(props)
    }	
	
	render() {
		let loader;
		
		if (this.props.loader.show) {
            loader = <div>
				<img src="./loading.gif"/>
            </div>;
        }
		return (
			<div>
				{loader}
				{this.props.items.data.map((item, i) =>
					<div key={item.id}>
						<span key={item.id}> {item.id} - {item.name}</span>
					</div>
				)}

			</div> 
		)
	}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Middle);