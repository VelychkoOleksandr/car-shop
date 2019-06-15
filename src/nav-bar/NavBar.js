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
            <div id = "nav-bar">
                <Logo  />
                <ModelManu />
                <Shop />
                <Login />
                <Manu />
            </div>
        );
    }
}

export default NavBar;