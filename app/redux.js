import './index.html';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {addDeck, showAddDeck, hideAddDeck} from './redux/actions';
import * as reducers from './redux/reducers';
import App from './redux/App';
import Sidebar from './redux/Sidebar';

const store = createStore(combineReducers(reducers));

function run() {
    let state = store.getState();
    ReactDOM.render((<App>
            <Sidebar
                decks={state.decks}
                addingDeck={state.addingDeck}
                addDeck={(name) => store.dispatch(addDeck(name))}
                showAddDeck={() => store.dispatch(showAddDeck())}
                hideAddDeck={() => store.dispatch(hideAddDeck())}
            />
        </App>), document.getElementById('app')
    );
}

run();

store.subscribe(run);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addDeck('xxx'));
store.dispatch(showAddDeck());
store.dispatch(hideAddDeck());