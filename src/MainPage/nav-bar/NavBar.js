import React, { Component } from 'react';

import Logo from './Logo';
import ModelManu from "./ModelManu";
import Shop from './Shop';
import Login from "./Login";
import Manu from "./Manu";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id = 'header' >
                <div id = "nav-bar">
                    <Logo  />
                    <ModelManu />
                    <Shop />
                    <Login />
                    <Manu />
                </div>
            </header>
        );
    }
}

export default NavBar;