import React from "react";
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

import ferrari from './img/ferrari.jpg';
import ferrari2 from './img/ferrari-2.jpg';
import bmw from './img/BMW.jpg';
import bmw2 from './img/bmw-2.jpg';
import dodge from './img/dodge.jpg';
import dodge2 from './img/dodge-2.jpg';
import bentley from './img/bentley.jpg';
import bentley2 from './img/bentley-2.jpg';
import toyota from './img/toyota.jpg';
import toyota2 from './img/toyota-2.jpg';



class CarSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src = { toyota } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { dodge2 } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { ferrari2 } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { bmw } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { bentley2 } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { dodge } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { bentley } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { toyota2 } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { ferrari } alt = 'ferrari-01' />
                </div>
                <div>
                    <img src = { bmw2 } alt = 'ferrari-01' />
                </div>

            </Slider>
        );
    }
}

export default CarSlider;