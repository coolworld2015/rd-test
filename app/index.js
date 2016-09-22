import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import routes from './routes';
require('./index.html');
//import ReactDOM from 'react-dom';
//import App from './components/app';
//import reducers from './reducers';

//ReactDOM.render(<App />, document.getElementById('container'));
render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
);