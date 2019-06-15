import React, { Component } from 'react';
import Copyright from "./Copyright";
import FooterManu from "./FooterManu";

class Footer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id = 'footer-manu' >
                <FooterManu />
            </div>
        );
    }

}

export default Footer;