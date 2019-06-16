import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router"

import './index.css';
import * as serviceWorker from './serviceWorker';

import MainPage from "./MainPage/Main Page";
import ShopPage from "./ShopPage/ShopePage";



ReactDOM.render((
    <Router>
        <MainPage path = '/' />
        <ShopPage path = '/shop' />
    </Router>
), document.getElementById('root'));



serviceWorker.unregister();
