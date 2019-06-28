import React, { Component } from 'react';
import SearchField from "./SearchField";
import BackToMainButton from "./BackToMain";
import SearchButton from "./Unused/SearchButton";
import ShopBasket from "./ShopBasket";
import SideBarOption from "./Unused/SideBarOption";
import SearchResults from "./Unused/SearchResults";

import carList from  './json';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modelFilter: [],
            costFilterMin: 0,
            costFiltertMax: 99999,
            carList: carList,
            filteredList: []

        };

        this.filter = this.filter.bind(this);
    }

    filter() {
        if( this.state.modelFilter === [] ) {
            return;
        }

        let filteredListArray = this.state.carList.filter( item => this.state.modelFilter.includes(carList.model));

        this.setState({
            filteredList: filteredListArray
        });
    };



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
                    <SearchResults carList = {this.state.carList } />
                </main>

            </div>
        );
    }
}

export default ShopPage;