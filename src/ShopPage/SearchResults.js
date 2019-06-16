import React, { Component } from 'react';
import carList from  './json';
import BuyButton from "./BuyButton";

class SearchResults extends Component{
    constructor( props ) {
        super(props);
        this.state = {
            cars: carList,
        }
    }

    render() {
        const carsL = this.state.cars;
        return(
            <div id = 'search-results'>
                {
                    carsL.map( item => (
                        <div className = 'car-card'>
                            <img src = { item.img } alt = { item.name } />

                            <div id = 'car-info' >
                                <div id = 'model-cost'>
                                    <span>Model: <span id = 'model'>{ item.name }</span></span>
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