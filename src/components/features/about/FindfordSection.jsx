"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; 
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

// Custom Marker Icon
const customIcon = new L.Icon({
    iconUrl: "/images/mapIcon.png", // Using local map icon
    iconSize: [28, 36], // Reduced size to prevent overlap
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
});

function ChangeView({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

export default function FindfordSection({ data }) {
    const locations = data?.locations || []; 

    const [searchTerm, setSearchTerm] = useState("");
    const [mapCenter, setMapCenter] = useState([23.6, 58.5]);  
    const [zoom, setZoom] = useState(7);

    
    const initialBounds = useMemo(() => {
        if (locations.length === 0) return null;
        return L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
    }, [locations]);

    const filteredLocations = useMemo(() => {
        return locations.filter(loc =>
            loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            loc.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, locations]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // If there's a match, zoom to the first one
        if (value.length > 2) {
            const match = locations.find(loc =>
                loc.name.toLowerCase().includes(value.toLowerCase()) ||
                loc.address.toLowerCase().includes(value.toLowerCase())
            );
            if (match) {
                setMapCenter([match.lat, match.lng]);
                setZoom(14); // Even closer zoom for exact location
            }
        } else if (value === "") {
            // Force reset to initial bounds
            setMapCenter([23.6, 58.5]);
            setZoom(7); 
        }
    };

    
    const SetInitialBounds = () => {
        const map = useMap();
        useEffect(() => {
            if (initialBounds) {
                map.fitBounds(initialBounds, { padding: [50, 50] });
            }
        }, [map]);
        return null;
    };

    if (!data) return null;

    return (
        <section className="py-[40px_20px] lg:py-[50px_30px] xl:py-[60px_40px] 2xl:py-[75px_45px] 3xl:py-[90px_60px] bg-[#F0F0F0] overflow-hidden">
            <div className="container">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-[25px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px] gap-6">
                    <div className="w-full md:w-8/12">
                        <div className="md:max-w-[585px] xl:max-w-[730px] 2xl:max-w-[845px] 3xl:max-w-[1000px] w-full">
                            <Heading
                                size="heading1"
                                as="h2"
                                className="text-black mb-[10px]"
                            >
                                {data?.title}{" "}
                                <span className="block w-full">
                                    {data?.highlight}
                                </span>
                            </Heading>
                            <Text
                                size="text1"
                                as="p"
                                className=" 3xl:text-[21px]text-[#434343]"
                            >
                                {data?.description}{" "}
                            </Text>
                        </div>
                    </div>

                    <div className="relative w-full md:w-4/12">
                        <div className="relative sm:max-w-[260px] xl:max-w-[330px] 2xl:max-w-[390px] 3xl:max-w-[490px] w-full h-[45px] md:h-[40px] 2xl:h-[44px] 3xl:h-[56px] bg-white rounded-[4px] ml-auto overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search by location..."
                                className="2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[11px] w-full h-full px-5 py-3 pr-12 rounded-[4px]  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all "
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-[15px] flex items-center">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" >
                                    <path d="M6.61165 0C2.96805 0 0 2.97019 0 6.61645C0 10.2627 2.96805 13.2387 6.61165 13.2387C8.16795 13.2387 9.59926 12.6929 10.7305 11.7867L13.4845 14.5412C13.6235 14.6746 13.8091 14.7481 14.0016 14.7461C14.1941 14.7442 14.3782 14.6669 14.5144 14.5307C14.6507 14.3946 14.7282 14.2105 14.7304 14.0179C14.7327 13.8252 14.6594 13.6393 14.5264 13.5001L11.7724 10.7441C12.6787 9.61027 13.2247 8.17567 13.2247 6.61645C13.2247 2.97019 10.2553 0 6.61165 0ZM6.61165 1.47066C9.46104 1.47066 11.7537 3.76501 11.7537 6.61645C11.7537 9.4679 9.46104 11.768 6.61165 11.768C3.76227 11.768 1.46958 9.4679 1.46958 6.61645C1.46958 3.76501 3.76227 1.47066 6.61165 1.47066Z" fill="black" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="relative overflow-hidden border-0  h-[400px] md:h-[360px] xl:h-[450px] 2xl:h-[540px] 3xl:h-[670px]">
                    <MapContainer
                        center={mapCenter}
                        zoom={zoom}
                        scrollWheelZoom={false}
                        className="w-full h-full z-0"
                    >
                        <ChangeView center={mapCenter} zoom={zoom} />
                        <SetInitialBounds />
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            attribution=''
                        />
                        {filteredLocations.map((loc) => (
                            <Marker
                                key={loc.id}
                                position={[loc.lat, loc.lng]}
                                icon={customIcon}
                            >
                                <Popup className="custom-popup">
                                    <div className="p-1">
                                        <h4 className="font-bold text-gray-900">{loc.name}</h4>
                                        <p className="text-xs text-gray-600 mt-1">{loc.address}</p>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 text-[10px] text-blue-600 font-semibold hover:underline"
                                        >
                                            GET DIRECTIONS
                                        </a>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {/* Overlay for "No results" */}
                    {filteredLocations.length === 0 && searchTerm !== "" && (
                        <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <p className="text-gray-800 font-medium">No locations found matching &quot;{searchTerm}&quot;</p>
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="mt-3 text-blue-600 text-sm font-semibold hover:underline"
                                >
                                    Clear Search
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
