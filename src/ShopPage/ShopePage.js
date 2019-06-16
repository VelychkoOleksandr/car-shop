import React, { Component } from 'react';
import SearchField from "./SearchField";

class ShopPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id = 'shop-page' >
                <SearchField />
            </div>
        );
    }
}

export default ShopPage;