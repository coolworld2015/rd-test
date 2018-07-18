import React from 'react';
import { connect } from 'react-redux';
import { addDeck } from './actions';

const mapDispatchToProps = (dispatch) => ({
    addDeck: (name) => dispatch(addDeck(name))
});

const clickHandler = (props) => {
        props.addDeck('xxxx')
    }
	
const Top = (props) => {
    return (
        <div onClick={clickHandler.bind(null, props)}>
			Top
		</div> 
    )
};

export default connect(
	null,
	mapDispatchToProps
)(Top);