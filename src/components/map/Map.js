import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePosition } from '../../hooks/custom/usePosition';

const Map = () => {
    const { latitude, longitude } = usePosition();


    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 41.408697,
        longitude: 2.185137,
        zoom: 16
    });

    return (
        <div>
            <h1>COORDS: {latitude}</h1>
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/invisibleobjects/ck45qnz0c1kbc1co205qlt6s2"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                {latitude &&
                    <Marker
                        latitude={latitude}
                        longitude={longitude}>
                        HOLA
            </Marker>}
            </ReactMapGL>
        </div>
    )

}

export default Map;