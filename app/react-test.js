import React from 'react';
import {render} from 'react-dom';
import './index.html';
import './css/style.css';
import App from './react/app';

render(
    <App/>,
    document.getElementById('app')
);