import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addDec } from './actions';

const mapStateToProps = ({decks, items}) => ({
    decks,
    items
});

const mapDispatchToProps = (dispatch) => ({
    addDeck: (name) => dispatch(addDeck(name))
});

class Middle extends Component {
    constructor(props) {
        super(props);
    }	
	
	render() {
		return (
			<div>

				{this.props.decks.map((item, i) =>
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