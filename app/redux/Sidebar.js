import React, {Component} from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.decks)
    }

    render() {
        return (
            <div>
                <h1>All Decks</h1>
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
