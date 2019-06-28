import React, { Component } from 'react';
import OptionModel from "./OptionModel";
import OptionCost from "./OptionCost";
import SearchButton from "./SearchButton";

class SideBarOption extends Component{
    constructor( props ) {
        super(props);
    }

    render() {
        return(
            <div id = 'side-bar'>
                <OptionModel modelFilter = { this.props.modelFilter } />
                <OptionCost costFilterMin = { this.props.costFilterMin }  costFilterMax = { this.props.costFilterMax } />
                <SearchButton searchHandler = { this.props.filter } />
            </div>
        );
    }
}

export default SideBarOption;