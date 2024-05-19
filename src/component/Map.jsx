import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import useCoordinates from "../hooks/useCoordinates";
export const Map = ({ response }) => {
  const { lat, long } = useCoordinates();
  const { newLat, newLong } = response;
  let latitude = newLat === 0 ? lat : newLat;
  let longitude = newLong === 0 ? long : newLong;
  const position = [latitude, longitude];

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
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
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
