import './index.html';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import * as reducers from './redux/reducers';

import App from './redux/App';
import Sidebar from './redux/Sidebar';

const store = createStore(combineReducers(reducers));

function run() {
    ReactDOM.render((
        <Provider store={store}>
            <App>
                <Sidebar />
            </App>
        </Provider>), document.getElementById('app')
    );
}

run();
store.subscribe(run);

store.subscribe(() => {
    console.log(store.getState());
});