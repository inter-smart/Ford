'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const sliderItems = [
    {
        label: 'CARS',
        image: '/images/car1.png',
        engine: '2.0L EcoBoost®',
        body: 'Coupe',
        transmission: '6-speed',
        hp: '250',
        drive: 'FWD',
    },
    {
        label: 'TRUCKS',
        image: '/images/car2.png',
        engine: '3.5L V6',
        body: 'Pickup',
        transmission: '10-speed',
        hp: '400',
        drive: '4x4',
    },
    {
        label: 'SUVs',
        image: '/images/car3.png',
        engine: '2.3L EcoBoost®',
        body: 'SUV',
        transmission: '8-speed',
        hp: '300',
        drive: 'AWD',
    },
    {
        label: 'PERFORMANCE',
        image: '/images/car4.png',
        engine: '3.0L EcoBoost® V6',
        body: 'Double Cab',
        transmission: '10-speed',
        hp: '405',
        drive: '4x4',
    },
];

export default function VehicleShowcase() {
    const [activeIndex, setActiveIndex] = useState(null);
    const thumbSwiperRef = useRef(null);
    const active = activeIndex !== null ? sliderItems[activeIndex] : null;

    return (
        <div
            className={`absolute top-0 right-0 flex justify-end h-full w-full text-white p-8 overflow-hidden transition-colors duration-500 ${activeIndex !== null ? 'bg-black' : 'bg-transparent'
                }`}
        >
            {/* Main Section - Show only after thumbnail click */}
            {active && (
                <div className="flex-1 flex flex-col justify-center duration-500 ">
                    {/* Background Title */}
                    <div className="text-[80px] font-bold text-white/10 absolute top-8 left-8 leading-none z-0">
                        <div>2025 Ranger</div>
                        <div>Raptor</div>
                    </div>

                    {/* Image */}
                    <div className="z-10">
                        <img
                            src={active.image}
                            alt={active.label}
                            className="w-[600px] object-contain mx-auto animate-carMove"
                        />
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-3 text-sm gap-6 mt-8 z-10 relative">
                        <div>
                            <p className="text-white/50">Engine</p>
                            <p className="font-semibold">{active.engine}</p>
                        </div>
                        <div>
                            <p className="text-white/50">Bodystyle</p>
                            <p className="font-semibold">{active.body}</p>
                        </div>
                        <div>
                            <p className="text-white/50">Drive System</p>
                            <p className="font-semibold">{active.drive}</p>
                        </div>
                        <div>
                            <p className="text-white/50">Automatic Transmission</p>
                            <p className="font-semibold">{active.transmission}</p>
                        </div>
                        <div>
                            <p className="text-white/50">Horsepower</p>
                            <p className="font-semibold">{active.hp}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Thumbnail Vertical Slider */}
            <div className="w-[120px] ml-6 flex flex-col items-center duration-500 ">
                <Swiper
                    direction="vertical"
                    slidesPerView={4}
                    spaceBetween={10}
                    navigation={false}
                    onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
                    modules={[Navigation]}
                    className="h-[500px] bg-[#2e2e2e] rounded-lg p-2"
                >
                    {sliderItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => setActiveIndex(index)}
                                className={`cursor-pointer p-1 rounded-md transition-all duration-300 ${index === activeIndex ? 'bg-white/20' : 'hover:bg-white/10'
                                    }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="w-full h-[60px] object-contain mb-1"
                                />
                                <p className="text-center text-xs uppercase">{item.label}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Scroll Buttons */}
                <div className="flex justify-center gap-2 mt-3">
                    <button
                        onClick={() => thumbSwiperRef.current?.slidePrev()}
                        className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center rotate-180"
                    >
                        ⬇
                    </button>
                    <button
                        onClick={() => thumbSwiperRef.current?.slideNext()}
                        className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center"
                    >
                        ⬇
                    </button>
                </div>
            </div>
        </div>
    );
}
