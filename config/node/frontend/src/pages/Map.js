import React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent.js';
import logo2 from "../static/logo2.png";

function Map() {
    return (
        <div className='map'>
            <div className='map__top'>
                <div className="map__header">
                    <div className="map__title">GEOMAP.</div>
                    <div className='home__logo'>
                        <Link to="/" className="home__logoLink">
                          <img src={logo2} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='map__content'>
                <MapComponent />
            </div>
        </div>
    );
}

export default Map;
