import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

const OpenStreetMap = () => {
  const location = [44.902470, 1.211192];
  return (
    <MapContainer
      center={location}
      zoom={15}
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
