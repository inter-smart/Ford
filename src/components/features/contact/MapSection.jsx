"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// FIX: Next.js cannot auto-load Leaflet default icons
const customIcon = new L.Icon({
  iconUrl: "/images/mapIcon.png",
  iconSize: [35, 45], // adjust based on your icon
  iconAnchor: [17, 45], // center bottom of the icon
  popupAnchor: [0, -45], // popup above icon
});

const locations = [
  { name: "Muscat", lat: 23.5880, lng: 58.3829 },
  { name: "Sohar", lat: 24.3470, lng: 56.7075 },
  { name: "Barka", lat: 23.7123, lng: 57.0352 },
  { name: "Nizwa", lat: 22.9333, lng: 57.5330 },
  { name: "Ibra", lat: 22.6900, lng: 58.5330 },
  { name: "Sur", lat: 22.5667, lng: 59.5289 },
  { name: "Duqm", lat: 19.6700, lng: 57.0000 },
  { name: "Al Buraimi", lat: 24.2500, lng: 55.7990 },
];

export default function ContactMapSection() {
  return (
     <section className="py-[25px_40px] 2xl:py-[30px_60px] 3xl:py-[45px_90px] w-full h-auto block">
           
      <div className="container">
        <div className="w-full h-[300px] md:h-[350px] xl:h-[400px] 2xl:h-[450px] 3xl:h-[500px] rounded-xl overflow-hidden relative">

          <MapContainer
            center={[23.6, 58]}
            zoom={6}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {locations.map((loc, i) => (
              <Marker
                key={i}
                position={[loc.lat, loc.lng]}
                icon={customIcon}   // <-- important
              >
                <Popup>{loc.name}</Popup>
              </Marker>
            ))}
          </MapContainer>

        </div>
      </div>
    </section>
  );
}
