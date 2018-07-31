import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({decks, items}) => ({
    decks,
	items
});

const Bottom = (props) => {
    return (
        <div>
			Bottom - {props.items.data.length}
		</div> 
    )
};

export default connect(
	mapStateToProps
)(Bottom);