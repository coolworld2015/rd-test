import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addDeck, showAddDeck, hideAddDeck} from '../actions';
import {Link} from 'react-router';

const mapStateToProps = ({decks, addingDeck}) => ({
    decks,
    addingDeck
});

const mapDispatchToProps = (dispatch) => ({
    addDeck: (name) => dispatch(addDeck(name)),
    showAddDeck: () => dispatch(showAddDeck()),
    hideAddDeck: () => dispatch(hideAddDeck())
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