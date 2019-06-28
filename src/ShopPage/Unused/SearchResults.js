import React, { Component } from 'react';
import BuyButton from "../BuyButton";

class SearchResults extends Component{
    constructor( props ) {
        super(props);

    }

    render() {
        return(
            <div id = 'search-results'>
                {
                    this.props.carList.map( item => (
                        <div className = 'car-card'>
                            <img src = { item.img } alt = { item.name } />

                            <div id = 'car-info' >
                                <div id = 'model-cost'>
                                    <span id = 'model'>{ item.name }</span>
                                    <span>{ item.cost }$</span>
                                </div>
                                <div id = 'controls'>
                                    <BuyButton />
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        );
    }
}

export default SearchResults;