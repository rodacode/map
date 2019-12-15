import React, { useState, useEffect , useRef} from 'react';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePosition } from '../../hooks/custom/usePosition';
import './map.scss';
import * as data from '../../data/markers.json';

const Map = () => {
    const { latitude, longitude } = usePosition();


    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 41.408697,
        longitude: 2.185137,
        zoom: 13
    });
    useEffect(()=>{
       //const map = Map.getMap();
       // map.on('load', () => {
         //add the GeoJSON layer here
        // map.addLayer({...})
       // console.log('piapaa')
       // })
    })

    return (
        <div>
            <h1>MAPS</h1>
    <h4>COORDS: Latitude : {latitude} Longitude: {longitude}</h4>
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/invisibleobjects/ck45qnz0c1kbc1co205qlt6s2"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                        <GeolocateControl 
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
                {data.markers.map(marker => (
                        <Marker
                        key={marker.id}
                        latitude={marker.latitude}
                        longitude={marker.longitude}>
                            <img src='https://i.imgur.com/MK4NUzI.png' alt="marker icon"/>
                            <span className="marker__name">{marker.name}</span>
                        </Marker>
                ))
                }
                {latitude &&
                    <Marker
                        latitude={latitude}
                        longitude={longitude}>
                        <div className="marker">
                            <img src='https://i.imgur.com/MK4NUzI.png' alt="marker icon"/>
                        </div>
            </Marker>}
            </ReactMapGL>
        </div>
    )

}

export default Map;