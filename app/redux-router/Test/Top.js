import React from 'react';
import { connect } from 'react-redux';
import { addDeck, addItems, showLoader, hideLoader } from './actions';

const mapStateToProps = ({loader}) => ({
    loader
});

const mapDispatchToProps = (dispatch) => ({
    addDeck: (name) => dispatch(addDeck(name)),
	addItems: (data) => dispatch(addItems(data)),
	showLoader: () => dispatch(showLoader()),
	hideLoader: () => dispatch(hideLoader())
});

const clickHandler = (state) => {
	//state.loader.show ? state.hideLoader() : state.showLoader();
	goSearch(state);
}

const goSearch = (state) => {
	state.showLoader();
	state.addItems([]);
	fetch('http://ui-base.herokuapp.com/api/items/findByPhone/555555')
		.then((response)=> response.json())
		.then((responseData)=> {
			state.addItems(responseData);
			state.hideLoader();
		})
		.catch((error)=> {
			console.log(error);
		})	
}
	
const Top = (state) => {
    return (
        <div onClick={clickHandler.bind(null, state)}>
			Top 
			{/*- {state.loader.show.toString()} */}
		</div> 
    )
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Top);