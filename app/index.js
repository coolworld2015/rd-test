import React from 'react';
import ReactDOM from 'react-dom';

require('./index.html');

import App from './components/app';
import reducers from './reducers';
 
ReactDOM.render(<App />, document.getElementById('container'));
