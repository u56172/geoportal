import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent.js';
import logo2 from "../static/logo2.png";

function Map(props) {
    return (
        <div className='map'>
            <div className='map__top'>
                <div className='home__logo'>
                    <Link to="/" className="home__logoLink">
                      <img src={logo2} />
                    </Link>
                </div>

                <div className="map__titleContainer">
                    <div className='map__btnLeft'>
                        <Link className='map__navItem'>Func1</Link>
                        <Link className='map__navItem'>Func2</Link>
                    </div>
                    <div className="map__title">GEOMAP.</div>
                    <div className='map__btnRight'>
                        <Link className='map__navItem'>Func3</Link>
                        <Link className='map__navItem'>Func4</Link>
                    </div>
                </div>
            </div>

            <div className='map__content'>
                <MapComponent properties={props}></MapComponent>
            </div>
        </div>
    );
}

export default Map;
