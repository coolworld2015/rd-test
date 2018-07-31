import React from 'react';
import { connect } from 'react-redux';
import { addDeck, addItems } from './actions';

const mapDispatchToProps = (dispatch) => ({
    addDeck: (name) => dispatch(addDeck(name)),
	addItems: (data) => dispatch(addItems(data))
});

const clickHandler = (state) => {
	state.addDeck('xxxx');
	goSearch(state)
	
}

const goSearch = (state) => {
	state.addItems([]);
	fetch('http://ui-base.herokuapp.com/api/items/findByPhone/555555')
		.then((response)=> response.json())
		.then((responseData)=> {
			state.addItems(responseData);
		})
		.catch((error)=> {
			console.log(error);
		})	
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