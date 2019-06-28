import React, { Component } from 'react';

class OptionModel  extends  Component{
    constructor(props) {
        super(props);

        this.addToModelFilter = this.addToModelFilter.bind(this);
    }


    addToModelFilter(event) {
        let checkModel = event.target.value;
        let checked = event.target.checked;

        if (checked && !this.props.modelFilter.includes( checkModel )) {
            this.props.modelFilter.push( checkModel );
        } else if ( !checked ) {
            for( let i = 0; i < this.props.modelFilter.length; i++){
                if ( this.props.modelFilter[i] === checkModel) {
                    this.props.modelFilter.splice(i, 1);
                    i--;
                }
            }
        }

        console.log( this.props.modelFilter );
    }

    render() {
        return(
            <div id = 'option-model'>
                <h2>Model</h2>

                <label htmlFor="ferrari">
                    <input type="checkbox" name="option-model" id="ferrari" value = "ferrari" onChange = { this.addToModelFilter } />
                FERRARI</label>


                <label htmlFor="bmw">
                    <input type="checkbox" name="option-model" id="bmw" value = "bmw" onChange = { this.addToModelFilter } />
                BMW</label>


                <label htmlFor="dodge">
                    <input type="checkbox" name="option-model" id="dodge" value = "dodge" onChange = { this.addToModelFilter } />
                DODGE</label>

                <label htmlFor="toyota">
                    <input type="checkbox" name="option-model" id="toyota" value = "toyota" onChange = { this.addToModelFilter } />
                TOYOTA</label>


                <label htmlFor="bentley">
                    <input type="checkbox" name="option-model" id="bentley" value = "bentley" onChange = { this.addToModelFilter } />
                BENTLEY</label>

            </div>
        );
    }
}

export default OptionModel;