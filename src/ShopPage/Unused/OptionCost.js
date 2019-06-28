import React, { Component } from 'react';

class OptionCost  extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id = 'option-cost'>
                <h2>Cost</h2>

                <label htmlFor ="cost-range-min">From:
                    <input type="number" name="cost-range" id="cost-range-min" />
                </label>

                <label htmlFor="cost-range-max">To:
                    <input type="number" name="cost-range" id="cost-range-max"/>
                </label>

            </div>
        );
    }
}

export default OptionCost;