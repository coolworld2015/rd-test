import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
	
	clickOnItem() {
		this.props.clickHandle(this.props.name);
	}
	
    render() {
        return (
            <div onClick={this.clickOnItem.bind(this)}>
                <h4>{this.props.id} - {this.props.name}</h4>
                <hr/>
            </div>
        );
    }
}

module.exports = ListItem;