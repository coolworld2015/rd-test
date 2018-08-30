import './index.html';
import './css/style.css';
import './img/loading.gif';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import * as reducers from './redux-router/Test/reducers';
reducers.routing = routerReducer;

import App from './redux-router/App';
import VisibleCards from './redux-router/VisibleCards';

import {addDeck, showAddDeck, hideAddDeck} from './redux-router/Test/actions';

const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(hashHistory, store);

const routes = (
    <Router history={history}>
        <Route path="/" component={App}/>
        <Route path="/deck/:deckId" component={VisibleCards}/>
    </Router>
);

    function run() {
    ReactDOM.render((
        <Provider store={store}>
            {routes}
        </Provider>), document.getElementById('app')
    );
}

run();
store.subscribe(run);

store.subscribe(() => {
    console.log(store.getState());
});

//store.dispatch(addDeck('first', 'cool'));
//store.dispatch(addDeck('second', 'cool'));

//store.dispatch(({type: 'ADD_DECK', name: 'cool', description: 'xxx'}));

//store.dispatch(({type: 'ADD_ITEMS', data: [{id:'a1'}]}));

window.store = store;