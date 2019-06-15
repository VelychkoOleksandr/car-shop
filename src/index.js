import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import NavBar from './nav-bar/NavBar';
import MainContent from "./main/MainContent";
import Footer from "./footer/Footer";



ReactDOM.render(<NavBar />, document.getElementById('header' ));
ReactDOM.render(<MainContent />, document.getElementById('content' ));
ReactDOM.render(<Footer />, document.getElementById('footer' ));




serviceWorker.unregister();
