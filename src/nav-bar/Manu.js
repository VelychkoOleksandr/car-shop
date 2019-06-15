import React, { Component } from 'react';
import manuIcon from './images/menu-button.svg';

class Manu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id = 'manu'>
                <img src = { manuIcon } alt = "manu-icon" />
            </div>
        );
    }
}

export default Manu;