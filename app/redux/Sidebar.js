import React, {Component} from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
	
	toggleHandler() {
		if (!this.refs.add) {
			this.props.showAddDeck();
		} else {
			this.props.hideAddDeck();
		}	
	}
    
	render() {
        return (
            <div>
                <h1 onClick={this.toggleHandler.bind(this)}>All Decks</h1>
                <ul>
                    {this.props.decks.map((item, i) =>
                        <li key={i}> {item.name} </li>
                    )}
                </ul>
                {this.props.addingDeck && <input ref="add" />}
            </div>
        );
    }
}

export default Sidebar;
