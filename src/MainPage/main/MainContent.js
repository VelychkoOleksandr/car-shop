import React, { Component } from 'react';
import CarSlider from "./CarSlider";
import GetNewCar from "./GetNewCar";



class MainContent extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <main id = 'content' >
                <div id = 'main-content' >
                    <CarSlider />
                    <GetNewCar />
                </div>
            </main>

        );
    }
}

export default MainContent;
