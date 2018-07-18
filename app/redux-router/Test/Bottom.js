import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({decks}) => ({
    decks
});

const Bottom = (props) => {
    return (
        <div>
			Bottom - {props.decks.length}
		</div> 
    )
};

export default connect(
	mapStateToProps
)(Bottom);