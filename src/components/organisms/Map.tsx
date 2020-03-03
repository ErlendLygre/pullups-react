import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { Park } from '../../types';

interface MapProps {
    parks: Park[];
}

export const Map = ({parks}: MapProps) => {

    const markers = parks.map(park => (
            <Marker key={park.location} position={[park.x, park.y]}>
                <Popup>
                    <strong>{park.location}</strong>
                    <p>{park.description}</p>
                </Popup>
            </Marker>
        )
    )
        
    return (
        <React.Fragment>
            <LeafletMap
                center={[59.911491, 10.757933]}
                zoom={11}
                maxZoom={30}
                attributionControl={false}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {markers} 
            </LeafletMap>
        </React.Fragment>
    );
}