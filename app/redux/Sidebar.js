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

    enterHandler(e) {
        if (e.which !== 13) return;
        this.props.addDeck(this.refs.add.value, this.refs.add.value);
        this.props.hideAddDeck();
    }
	
    clickHandler(id) {
        this.props.delDeck(id);
    }

    render() {
        return (
            <div style={{
				backgroundColor: 'white',
				textAlign: 'center'
			}}>
                <h1 onClick={this.toggleHandler.bind(this)}>All Decks</h1>
                <ul>
                    {this.props.decks.map((item, i) =>
                        <li key={i} onClick={this.clickHandler.bind(this, item.id)}> {item.name} </li>
                    )}
                </ul>
                {this.props.addingDeck && <input ref="add" onKeyPress={this.enterHandler.bind(this)}/>}
            </div>
        );
    }
}

export default Sidebar;
