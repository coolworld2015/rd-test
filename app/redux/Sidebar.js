import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addDeck, showAddDeck, hideAddDeck} from './actions';

const mapStateToProps = ({decks, addingDeck}) => ({
    decks,
    addingDeck
});

const mapDispatchToProps = (dispatch) => ({
    addDeck: (name) => dispatch(addDeck(name)),
    showAddDeck: () => dispatch(showAddDeck()),
    hideAddDeck: () => dispatch(hideAddDeck())
});

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
        this.props.addDeck(this.refs.add.value);
        this.props.hideAddDeck();
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
                {this.props.addingDeck && <input ref="add" onKeyPress={this.enterHandler.bind(this)}/>}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
