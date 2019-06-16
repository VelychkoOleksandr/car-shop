import React, { Component } from 'react';
import NavBar from "./nav-bar/NavBar";
import MainContent from "./main/MainContent";
import Footer from "./footer/Footer";


class MainPage extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <div>
                <NavBar />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default MainPage;