import './index.html';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';

import Sidebar from './redux/Sidebar';

const addDeck = (name, description) => ({type: 'ADD_DECK', name, description});
const showAddDeck = () => ({type: 'SHOW_ADD_DECK'});
const hideAddDeck = () => ({type: 'HIDE_ADD_DECK'});
const deleteDeck = (id) => ({type: 'DEL_DECK', id});

const decks = (state, action) => {
    switch (action.type) {
        case 'ADD_DECK':
			console.log(action)
            let newDeck = {
                id: +new Date,
                name: action.name,
                description: action.description
            };
            return state.concat([newDeck]);
			
        case 'DEL_DECK':
			console.log('DEL_DECK ' + action.id)
            return state;
        default: return state || [];
    }
};

const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });
            return state.concat([newCard]);

        default: return state || [];
    }
};

const addingDeck = (state, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        default: return !!state;
    }
};

window.store = Redux.createStore(Redux.combineReducers({
    cards,
    decks,
    addingDeck
}));

function run() {
    let state = store.getState();
    ReactDOM.render(
        <Sidebar
            decks={state.decks}
            addingDeck={state.addingDeck}
            addDeck={(name, description) => store.dispatch(addDeck(name, description))}
            delDeck={(id) => store.dispatch(deleteDeck(id))}
            showAddDeck={() => store.dispatch(showAddDeck())}
            hideAddDeck={() => store.dispatch(hideAddDeck())}
        />,
        document.getElementById('app')
    );
}

run();
store.subscribe(run);

window.show = () => store.dispatch(showAddDeck());
window.hide = () =>  store.dispatch(hideAddDeck());
window.addDeck = (name) =>  store.dispatch(addDeck(name));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addDeck('xxx', 'cool'));
store.dispatch(showAddDeck());
store.dispatch(hideAddDeck());
store.dispatch(addDeck('aaa', 'test'));

// store.dispatch({
//     type: 'ADD_CARD',
//     data: {
//         front: 'front',
//         back: 'back'
//     }
// });
//
// store.dispatch({
//     type: 'ADD_CARD',
//     data: {}
// });

//ReactDOM.render(<App />, document.getElementById('app'));