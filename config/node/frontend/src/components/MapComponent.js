import React, { useRef, useEffect } from "react";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileWMS from "ol/source/TileWMS";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

function MapComponent(props) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            return;
        }

        const facilitiesWMS = new TileLayer({
            source: new TileWMS({
                url: 'http://localhost:9000/geoserver/prge/wms',
                params: {
                    'LAYERS': 'prge:facilities',
                    'TILED': true,
                    'VERSION': '1.1.0',
                    'SRS': 'EPSG:3857'
                },
                serverType: 'geoserver',
            }),
        });

        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                facilitiesWMS,
            ],
            view: new View({
                center: fromLonLat([21, 52]),
                zoom: 6,
            }),
        });

        return () => map.setTarget(null);
    }, []);

    return (
        <div className="mapComponent" ref={mapRef} style={{ width: "100%", height: "90vh" }}></div>
    );
}

export default MapComponent;
