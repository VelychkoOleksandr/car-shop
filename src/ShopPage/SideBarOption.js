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
                <OptionModel />
                <OptionCost />
                <SearchButton />
            </div>
        );
    }
}

export default SideBarOption;