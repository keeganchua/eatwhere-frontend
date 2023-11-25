// App.js
import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <div className="top-bar-container">
                <h1 className="top-bar-title">EATWHERE</h1>
            </div>
            <div className="content-container">
                <h1 className="content-title">EAT WHERE?</h1>
                <p className="content-subtitle">Best Food Places in Singapore    
                    <img src="/singapore-flag.png" alt="Singapore Flag" className="singapore-flag-size" />
                </p>
            </div>
            <div className="button-container">
                <button><h1>Search</h1></button>
                <button><h1>I Choose</h1></button>
            </div> 
            <div className="food-images-container">
                <img src="/nasilemak.png" alt="Nasi Lemak" className="nasilemak-positioned" />
                <img src="/asamfish.png" alt="Asam Fish" className="asamfish-positioned" />
                <img src="/charkuetiao.png" alt="Char Kue Tiao" className="charkuetiao-positioned" />
                <img src="/laksa.png" alt="Laksa" className="laksa-positioned" />
                <img src="/rotiprata.png" alt="Roti Prata" className="rotiprata-positioned" />
                <img src="/satay.png" alt="Satay" className="satay-positioned" />
                <img src="/currypuff.png" alt="Curry Puff" className="currypuff-positioned" />
                <img src="/grandmapancake.png" alt="Grandma Pancake" className="grandmapancake-positioned" />
            </div>
        </div>
    );
}

export default App;
