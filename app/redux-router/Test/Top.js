import React from 'react';
import { connect } from 'react-redux';
import { addDeck, addItems } from './actions';

const mapDispatchToProps = (dispatch) => ({
    addDeck: (name) => dispatch(addDeck(name)),
	addItems: (data) => dispatch(addItems(data))
});

const clickHandler = (state) => {
	state.addDeck('xxxx');
	state.addItems([]);
}
	
const Top = (state) => {
    return (
        <div onClick={clickHandler.bind(null, state)}>
			Top
		</div> 
    )
};

export default connect(
	null,
	mapDispatchToProps
)(Top);