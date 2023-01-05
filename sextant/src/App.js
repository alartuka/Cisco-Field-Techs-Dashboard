import React, { Component } from 'react';
import './App.css';
import Banner from './banner';
import Exhibit from './exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Exhibit #1"></Exhibit>
                <Exhibit name="Exhibit #222"></Exhibit>
                <Exhibit name="Exhibit #4444"></Exhibit>
                <Exhibit name="Exhibit #12324324: One more"></Exhibit>
            </div>
        );
    }
}

export default App;