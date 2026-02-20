import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MARKER_COLORS = [
    "#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6",
    "#1abc9c", "#e67e22", "#e84393", "#0984e3", "#6c5ce7",
];

function createColoredIcon(color) {
    return L.divIcon({
        className: "",
        iconSize: [28, 42],
        iconAnchor: [14, 42],
        popupAnchor: [0, -36],
        html: `
            <svg width="28" height="42" viewBox="0 0 28 42" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 28 14 28s14-17.5 14-28C28 6.268 21.732 0 14 0z"
                      fill="${color}" stroke="#fff" stroke-width="1.5"/>
                <circle cx="14" cy="14" r="6" fill="#fff"/>
            </svg>`,
    });
}

function getRandomColor() {
    return MARKER_COLORS[Math.floor(Math.random() * MARKER_COLORS.length)];
}

function toImageSrc(imgUrl) {
    if (!imgUrl) return "";
    if (imgUrl.startsWith("http")) return imgUrl;
    return `/app/static/${imgUrl}`;
}

function MapComponent() {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;

        let cancelled = false;

        const map = L.map(mapRef.current).setView([52, 21], 6);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        L.tileLayer.wms("/geoserver/prge/wms", {
            layers: "prge:facilities",
            format: "image/png",
            transparent: true,
            version: "1.1.0",
        }).addTo(map);

        fetch("/app/get_facilities_geojson")
            .then((res) => res.json())
            .then((geojson) => {
                if (cancelled) return;
                L.geoJSON(geojson, {
                    pointToLayer: (feature, latlng) => L.marker(latlng, { icon: createColoredIcon(getRandomColor()) }),
                    onEachFeature: (feature, layer) => {
                        const { name, city, img_url } = feature.properties;
                        const img = img_url
                            ? `<img src="${toImageSrc(img_url)}" style="width:100%;height:auto;border-radius:6px;margin-bottom:8px;" /><br/>`
                            : "";
                        layer.bindPopup(
                            `<div style="min-width:280px;font-size:15px;line-height:1.4;">
                                ${img}<strong style="font-size:17px;">${name}</strong><br/>${city}
                            </div>`,
                            { maxWidth: 350 }
                        );
                    },
                }).addTo(map);
            });

        return () => {
            cancelled = true;
            map.remove();
        };
    }, []);

    return (
        <div className="mapComponent" ref={mapRef} style={{ width: "100%", height: "90vh" }}></div>
    );
}

export default MapComponent;
