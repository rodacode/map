import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {

    const [viewport, setViewport] = useState({
        width: "800px",
        height: "600px",
        latitude: 41.408697,
        longitude: 2.185137,
        zoom: 16
    });
    

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/invisibleobjects/ck45qnz0c1kbc1co205qlt6s2"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                <Marker
                    latitude={41.408697}
                    longitude={2.185137}>
                    <div><h4>HOLA SAMIGOZ</h4></div>
                </Marker>
            </ReactMapGL>
        </div>
    )

}

export default Map;