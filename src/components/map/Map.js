import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 16
    });
    
    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => setViewport(viewport)}
            >
            </ReactMapGL>
        </div>
    )

}

export default Map;