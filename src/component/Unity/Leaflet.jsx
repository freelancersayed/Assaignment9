import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const Leaflet = () => {
    return (
     <div>
           <MapContainer center={[22.7185, 89.0704]} zoom={13}  scrollWheelZoom={false} style={{ height: '400px', width: '100%' } }>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[22.7185, 89.0704]}>
          <Popup>
            My Home Ground Satkhira <br /> Shyamnagar 
          </Popup>
        </Marker>
      </MapContainer>
     </div>
    );
};

export default Leaflet;