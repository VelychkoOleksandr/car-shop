import React, { Component } from 'react';
import SearchField from "./SearchField";
import BackToMainButton from "./BackToMain";
import SearchButton from "./SearchButton";
import ShopBasket from "./ShopBasket";
import SideBarOption from "./SideBarOption";
import SearchResults from "./SearchResults";

class ShopPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id = 'shop-page' >

                <header id = 'header'>
                    <BackToMainButton />
                    <div id = 'search'>
                        <SearchField />
                        <SearchButton />
                    </div>
                    <ShopBasket />
                </header>

                <main id = 'content'>
                    <SideBarOption />
                    <SearchResults />
                </main>

            </div>
        );
    }
}

export default ShopPage;