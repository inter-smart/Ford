'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const sliderItems = [
  {
    label: 'CARS',
    colors: [
      { name: 'Arctic White', image: '/images/car1.png', code: '#FFFFFF' },
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Meteor Grey', image: '/images/car3.png', code: '#555555' },
      { name: 'Blue Lightning', image: '/images/car4.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car1.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/car2.png', code: '#000000' },
    ],
    engine: '2.0L EcoBoost®',
    body: 'Coupe',
    transmission: '6-speed',
    hp: '250',
    drive: 'FWD',
  },
  {
    label: 'CARS',
    colors: [
        { name: ' Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: ' White', image: '/images/car1.png', code: '#FFFFFF' },
      { name: ' Grey', image: '/images/car3.png', code: '#555555' },
      { name: 'Blue ', image: '/images/car4.png', code: '#005BBB' },
      { name: ' Orange', image: '/images/car1.png', code: '#F76300' },
      { name: ' Black', image: '/images/car2.png', code: '#000000' },
    ],
    engine: '2.0L EcoBoost®',
    body: 'Coupe',
    transmission: '6-speed',
    hp: '250666666',
    drive: 'FWD',
  },
  {
    label: 'CARS',
    colors: [
        { name: 'Meteor Grey', image: '/images/car3.png', code: '#555555' },
      { name: 'Arctic White', image: '/images/car1.png', code: '#FFFFFF' },
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Blue Lightning', image: '/images/car4.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car1.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/car2.png', code: '#000000' },
    ],
    engine: '2.0L EcoBoost®',
    body: 'Coupe',
    transmission: '6-speed',
    hp: '250',
    drive: 'FWD',
  },
  {
    label: 'CARS',
    colors: [
      { name: 'Arctic White', image: '/images/car1.png', code: '#FFFFFF' },
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Meteor Grey', image: '/images/car3.png', code: '#555555' },
      { name: 'Blue Lightning', image: '/images/car4.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car1.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/car2.png', code: '#000000' },
    ],
    engine: '2.0L EcoBoost®',
    body: 'Coupe',
    transmission: '6-speed',
    hp: '250',
    drive: 'FWD',
  },
  {
    label: 'CARS',
    colors: [
        { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
        { name: 'Meteor Grey', image: '/images/car3.png', code: '#555555' },
        { name: 'Arctic White', image: '/images/car1.png', code: '#FFFFFF' },
      { name: 'Blue Lightning', image: '/images/car4.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car1.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/car2.png', code: '#000000' },
    ],
    engine: '2.0L EcoBoost®',
    body: 'Coupe',
    transmission: '6-speed',
    hp: '250',
    drive: 'FWD',
  },
  {
    label: 'CARS',
    colors: [
      { name: 'Arctic White', image: '/images/car1.png', code: '#FFFFFF' },
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Meteor Grey', image: '/images/car3.png', code: '#555555' },
      { name: 'Blue Lightning', image: '/images/car4.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car1.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/car2.png', code: '#000000' },
    ],
    engine: '2.0L EcoBoost®',
    body: 'Coupe',
    transmission: '6-speed',
    hp: '250',
    drive: 'FWD',
  },
  // Add more car objects as needed...
];

export default function VehicleShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const thumbSwiperRef = useRef(null);

  const active = activeIndex !== null ? sliderItems[activeIndex] : null;

  return (
    <div
      className={`absolute top-0 right-0 flex justify-end h-full w-full text-white p-8 overflow-hidden transition-colors duration-500 ${
        activeIndex !== null ? 'bg-black' : 'bg-transparent'
      }`}
    >
      {/* Background Video */}
      <div
        className={`h-full w-full p-8 overflow-hidden transition-colors duration-500 ${
          activeIndex !== null ? 'hidden' : 'visible'
        }`}
      >
        <video
          autoPlay
          preload="auto"
          width={1920}
          height={1080}
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0"
        >
          <source src="/videos/hero-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container w-full h-full">
          <div className="relative w-full h-full">
            <div className="w-full max-w-[650px] absolute bottom-[75px] left-0">
              <div className="text-[54px] text-white font-medium">
                Discover the New Era of Ford in Oman
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Display */}
      {active && (
        <div className="flex-1 flex flex-col justify-center duration-500 relative">
          <div className="text-[80px] font-bold text-white/10 absolute top-8 left-8 leading-none z-0">
            <div>2025 Ranger</div>
            <div>Raptor</div>
          </div>

          <div className="z-10">
            <img
              src={active.colors[selectedColorIndex].image}
              alt={active.label}
              className="w-[600px] object-contain mx-auto animate-carMove"
            />
          </div>

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

          <button
            onClick={() => setShowColorOptions(!showColorOptions)}
            className="absolute left-8 bottom-8 bg-white/10 text-white px-4 py-2 rounded hover:bg-white/20 transition-all z-10"
          >
            Filter
          </button>

          {showColorOptions && active?.colors && (
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/80 rounded-lg p-4 space-y-2 z-10 w-[160px]">
              <button
                onClick={() => setShowColorOptions(false)}
                className="absolute top-2 right-2 text-white text-sm"
              >
                ×
              </button>
              {active.colors.map((color, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedColorIndex(i)}
                  className={`flex items-center gap-2 cursor-pointer text-sm rounded-md px-3 py-1 transition-all ${
                    i === selectedColorIndex
                      ? 'bg-white/20'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color.code }}
                  ></div>
                  <span className="text-white">{color.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Thumbnail Swiper */}
      <div className="w-[120px] ml-6 flex flex-col items-center duration-500">
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          navigation={false}
          onInit={(swiper) => {
            thumbSwiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            thumbSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation, Mousewheel]}
          className="h-[500px] bg-[#2e2e2e] rounded-lg p-2"
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => {
                  setActiveIndex(index);
                  setSelectedColorIndex(0);
                  setShowColorOptions(false);
                }}
                className={`cursor-pointer p-1 rounded-md transition-all duration-300 ${
                  index === activeIndex ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <img
                  src={item.colors[0].image}
                  alt={item.label}
                  className="w-full h-[60px] object-contain mb-1"
                />
                <p className="text-center text-xs uppercase">{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Buttons */}
        <div className="flex justify-center gap-2 mt-3">
          {!isBeginning && (
            <button
              onClick={() => thumbSwiperRef.current?.slidePrev()}
              className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center rotate-180"
            >
              ⬇
            </button>
          )}
          {!isEnd && (
            <button
              onClick={() => thumbSwiperRef.current?.slideNext()}
              className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center"
            >
              ⬇
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
