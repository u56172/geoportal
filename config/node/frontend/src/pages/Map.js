import React from 'react';
import MapComponent from '../components/MapComponent.js';
function Map(props) {
    return (
        <div>

            <MapComponent properties={props}></MapComponent>

        </div>
    );
}

export default Map;