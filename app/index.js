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

const store = Redux.createStore(function (state, action) {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });

            return Object.assign({}, state, {
               cards: state.cards ? state.cards.concat([newCard]) : [newCard]
            });

        default:
            return state || {};
    }
});

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