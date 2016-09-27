import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import './index.html';
import './css/style.css';

//ReactDOM.render(<App />, document.getElementById('container')); //TODO: Without Router

render(
    <Router history={hashHistory} routes={routes}/>,
    document.getElementById('app')
);

const cards = (state, action) => {                              //TODO: Added REDUX
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });

            return state.concat([newCard]);

        default:
            return state || [];
    }
};

const store = Redux.createStore(Redux.combineReducers({
    cards: cards
}));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'ADD_CARD',
    data: {
        front: 'front',
        back: 'back'
    }
});

store.dispatch({
    type: 'ADD_CARD',
    data: {}
});