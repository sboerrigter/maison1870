import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

const OpenStreetMap = () => {
  const location = [44.901692, 1.217597];
  return (
    <MapContainer
      center={location}
      zoom={14}
      scrollWheelZoom={false}
      className="w-full aspect-square"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}></Marker>
    </MapContainer>
  );
};

export default OpenStreetMap;
