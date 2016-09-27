import 'babel-polyfill';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import './index.html';
import './css/style.css';

// render(                                                       //TODO: Router
//     <Router history={hashHistory} routes={routes}/>,
//     document.getElementById('app')
// );

const App = (props) => {
    return (
        <div>
            <h1>Hello Redux !!!</h1>
        </div>
    )
};

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
    cards
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

ReactDOM.render(<App />, document.getElementById('app'));       //TODO: ReactDOM