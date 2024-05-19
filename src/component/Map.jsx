import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import useCoordinates from "../hooks/useCoordinates";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
export const Map = ({ response }) => {
  const { lat, long } = useCoordinates();
  const { newLat, newLong } = response;
  let latitude = newLat === 0 ? lat : newLat;
  let longitude = newLong === 0 ? long : newLong;
  const position = [latitude, longitude];
  console.log(position);
  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
  });

  if (lat != 0 && long != 0) {
    return (
      <MapContainer
        className="mapContainer"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeCenter position={position} />
      </MapContainer>
    );
  }
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
