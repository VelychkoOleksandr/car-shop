import React from 'react';
import ferrariLogo from './images/ferrari-logo.png';
import bmwLogo from './images/bmv-logo.svg';
import dodgeLogo from './images/dodge-logo.png';
import toyotaLogo from './images/toyota-logo.png';
import benteleyLogo from './images/bentley-logo.png';


const ModelManu = (props) => (
    <div id = 'model-manu' >
        <ul>
            <li><a href = '#'><img src = { ferrariLogo } alt="ferrari-logo" /> FERRARI</a></li>
            <li><a href = '#'><img src = { bmwLogo } alt="bmw-logo" /> BMW</a></li>
            <li><a href = '#'><img src = { dodgeLogo } alt="dodge-logo" /> DODGE</a></li>
            <li><a href = '#'><img src = { toyotaLogo } alt="dodge-logo" /> TOYOTA</a></li>
            <li><a href = '#'><img src = { benteleyLogo } alt="dodge-logo" /> BENTLEY</a></li>
        </ul>

    </div>
);

export default ModelManu;