import React, {useRef, useEffect} from 'react';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM'
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import {useGeographic} from 'ol/proj';
import 'ol/ol.css';
import {TileWMS} from "ol/source";

function MapComponent(props) {

    const mapRef = useRef(null);
    useGeographic()
    useEffect(() => {
        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                // http://localhost:9000/geoserver/ne/wms?service=WMS&version=1.1.0&request=GetMap&layers=ne%3Acountries&bbox=-180.0%2C-90.0%2C180.0%2C83.64513&width=768&height=370&srs=EPSG%3A4326&styles=&format=application/openlayers
                new TileLayer({
                    source: new TileWMS({
                      url: 'http://localhost:9000/geoserver/ne/wms?',
                      params: {'LAYERS': 'ne:countries', 'TILED': true},
                      serverType: 'geoserver',
                      transition: 0,
                    }),
                    //http://localhost:9000/geoserver/wms?service=WMS&version=1.1.0&request=GetMap&layers=land_cover&bbox=534812.2907552869%2C449157.5986658251%2C578052.8563778237%2C494770.6695298003&width=728&height=768&srs=EPSG%3A2180&styles=&format=application/openlayers
                }),
                new TileLayer({
                    source: new TileWMS({
                        url: 'http://localhost:9000/geoserver/wms?',
                        params: {'LAYERS': 'land_cover', 'TILED': true},
                        serverType: 'geoserver',
                        transition: 0,
                    })
                })
            ],
            view: new View({
                center: [21, 52],
                zoom: 6,
            })
        });
        return () => map.setTarget(null)
    }, [])
    return (
        <div className='mapComponent' ref={mapRef}>

        </div>
    );
}

export default MapComponent;
