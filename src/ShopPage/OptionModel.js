import React, { Component } from 'react';

class OptionModel  extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id = 'option-model'>
                <h2>Model</h2>

                <label htmlFor="ferrari">
                    <input type="checkbox" name="option-model" id="ferrari" />
                FERRARI</label>


                <label htmlFor="bmw">
                    <input type="checkbox" name="option-model" id="bmw"/>
                BMW</label>


                <label htmlFor="dodge">
                    <input type="checkbox" name="option-model" id="dodge"/>
                DODGE</label>

                <label htmlFor="toyota">
                    <input type="checkbox" name="option-model" id="toyota"/>
                TOYOTA</label>


                <label htmlFor="bentley">
                    <input type="checkbox" name="option-model" id="bentley"/>
                BENTLEY</label>

            </div>
        );
    }
}

export default OptionModel;