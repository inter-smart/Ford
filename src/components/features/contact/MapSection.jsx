"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "/images/mapIcon.png",
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -45],
});

export default function ContactMapSection({ data }) {
  if (!data?.branch_locations || !data.branch_locations.length) return null;

  const branchLocations = data.branch_locations
    .map((item) => {
      const lat = parseFloat(item.latitude?.toString().replace(",", "").trim());
      const lng = parseFloat(
        item.longitude?.toString().replace(",", "").trim()
      );
      if (isNaN(lat) || isNaN(lng)) return null;
      return { ...item, latitude: lat, longitude: lng };
    })
    .filter(Boolean);

  const center = branchLocations[0]
    ? [branchLocations[0].latitude, branchLocations[0].longitude]
    : [23.6, 58];

  return (
    <section className="py-[25px_40px] 2xl:py-[30px_60px] 3xl:py-[45px_90px] w-full h-auto block">
      <div className="container">
        <div className="w-full h-[300px] md:h-[350px] xl:h-[400px] 2xl:h-[450px] 3xl:h-[500px] rounded-xl overflow-hidden relative">
          <MapContainer
            center={center}
            zoom={6}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {branchLocations.map((item, index) => (
              <Marker
                key={index}
                position={[item?.latitude, item?.longitude]}
                icon={customIcon}
              >
                <Popup>{item?.branch_name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
