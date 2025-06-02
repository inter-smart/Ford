'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from 'next/link';

const sliderItems = [
  {
    label: 'CARS',
    carName: '2025 Ranger Raptor',
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
    label: 'Trucks',
    carName: '2025 Ranger Raptor',
    colors: [
      { name: ' Grey', image: '/images/car4.png', code: '#7A7A7A' },
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
    label: 'SuvS',
    colors: [
      { name: 'Meteor Grey', image: '/images/car2.png', code: '#555555' },
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
    label: 'Performance',
    colors: [
      { name: 'Arctic White', image: '/images/car3.png', code: '#FFFFFF' },
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
      className={`absolute top-0 right-0 flex justify-end h-full w-full text-white 2xl:py-[75px] py-[45px] overflow-hidden transition-colors duration-500 ${activeIndex !== null ? 'bg-[#181818]' : 'bg-transparent'
        }`}
    >
      {/* Background Video */}
      <div
        className="h-full w-full overflow-hidden transition-colors duration-500 "      >
        <video
          autoPlay
          preload="auto"
          width={1920}
          height={1080}
          muted
          loop
          playsInline
          className={`w-full h-full object-cover absolute top-0 left-0 ${activeIndex !== null ? 'hidden' : 'visible'}`}

        >
          <source src="/videos/hero-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container w-full h-full">
          <div className="relative w-full h-full flex items-end justify-between">
            <div
              className={`2xl:w-[calc(100%-135px)] lg:w-[calc(100%-110px)] w-[calc(100%-80px)] sm:max-w-[750px] max-w-[175px] ${activeIndex !== null ? 'hidden' : 'block'
                }`}
            >
              <div className="2xl:text-[54px] xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] text-white font-medium mb-[30px]" >
                Discover the <br />New Era of Ford in Oman
              </div>

              <div className="flex gap-4">
                <Link href="/book" className="2xl:text-[14px] xl:text-[12px] text-[10px] font-normal  text-white  min-w-[130px] 2xl:h-[40px] h-[35px] flex items-center justify-center bg-[#1A73E8] px-6 rounded-full hover:bg-[#fff] hover:text-black transition cursor-pointer">
                  Book Now
                </Link>
                <Link href="/test-drive" className="2xl:text-[14px] xl:text-[12px] text-[10px] font-normal  text-white  min-w-[130px] 2xl:h-[40px] h-[35px] flex items-center justify-center border border-whitepx-6 rounded-full   hover:bg-white hover:text-black transition cursor-pointer">
                  Test Drive
                </Link>
              </div>
            </div>


            {/* Car Display Details*/}

            {active && (
              <div className="flex-1 flex flex-col justify-center duration-500 relative ">
                <div className="w-full max-h-[550px] max-w-[calc(100%-200px)] relative">
                  <div className="text-[120px] font-medium text-transparent absolute top-[50px] right-0 leading-none z-[0] text-right outlined-text">

                    <div>2025 Ranger</div>
                    <div> Raptor</div>


                  </div>
                  <div className="realtive">
                    <img
                      src={active.colors[selectedColorIndex].image}
                      alt={active.label}
                      className="w-[850px] object-contain animate-carMove"
                    />
                  </div>
                  <button
                    onClick={() => setShowColorOptions(!showColorOptions)}
                    className="w-[32px] h-[32px] flex items-center justify-center absolute left-0 bottom-8 bg-[#A7A7A7] text-white p-[0] rounded-[10px] cursor-pointer hover:bg-white/20 transition-all z-10"
                  >
                    <svg className='w-full h-full' viewBox="0 0 32 33" >
                      <circle cx="16" cy="16.9004" r="16" fill="#A7A7A7" />
                      <path d="M16 7.90039C11.03 7.90039 7 11.9304 7 16.9004C7 21.8704 11.03 25.9004 16 25.9004C16.83 25.9004 17.5 25.2304 17.5 24.4004C17.5 24.0104 17.35 23.6604 17.11 23.3904C16.88 23.1304 16.73 22.7804 16.73 22.4004C16.73 21.5704 17.4 20.9004 18.23 20.9004H20C22.76 20.9004 25 18.6604 25 15.9004C25 11.4804 20.97 7.90039 16 7.90039ZM10.5 16.9004C9.67 16.9004 9 16.2304 9 15.4004C9 14.5704 9.67 13.9004 10.5 13.9004C11.33 13.9004 12 14.5704 12 15.4004C12 16.2304 11.33 16.9004 10.5 16.9004ZM13.5 12.9004C12.67 12.9004 12 12.2304 12 11.4004C12 10.5704 12.67 9.90039 13.5 9.90039C14.33 9.90039 15 10.5704 15 11.4004C15 12.2304 14.33 12.9004 13.5 12.9004ZM18.5 12.9004C17.67 12.9004 17 12.2304 17 11.4004C17 10.5704 17.67 9.90039 18.5 9.90039C19.33 9.90039 20 10.5704 20 11.4004C20 12.2304 19.33 12.9004 18.5 12.9004ZM21.5 16.9004C20.67 16.9004 20 16.2304 20 15.4004C20 14.5704 20.67 13.9004 21.5 13.9004C22.33 13.9004 23 14.5704 23 15.4004C23 16.2304 22.33 16.9004 21.5 16.9004Z" fill="#323232" />
                    </svg>

                  </button>
                </div>
                <div className="grid grid-cols-3 text-sm gap-6 mt-8 z-10 relative pointer-events-none">
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


                {showColorOptions && active?.colors && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#292929] rounded-lg px-[15px] py-[30px] space-y-2 z-10 min-w-[160px]">
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
                        className={`flex items-center gap-2 cursor-pointer text-sm rounded-md px-3 py-1 transition-all ${i === selectedColorIndex
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

            {/*car Thumbnail Swiper */}

            <div className="2xl:w-[135px] lg:w-[110px] w-[80px] 2xl:h-[570px] xl:h-[450px] sm:h-[400px] h-[350px] flex flex-col items-center duration-500 rounded-[5px] overflow-hidden">
              <Swiper
                direction="vertical"
                slidesPerView={4}
                spaceBetween={0}
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
                className="2xl:h-[calc(100%  - 50px)] xl: w-full bg-[rgba(187,187,187,0.3)] backdrop-blur-[20px] p-[15px] rounded-[5px]"
              >
                {sliderItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => {
                        setActiveIndex(index);
                        setSelectedColorIndex(0);
                        setShowColorOptions(false);
                      }}
                      className={`w-full h-full cursor-pointer px-[15px] py-[10px] rounded-[5px] transition-all duration-300 flex flex-col items-center justify-center border-b border-[rgba(187,187,187,0.3)] ${index === activeIndex ? 'bg-white/20' : 'hover:bg-white/10'
                        }`}
                    >
                      <img
                        src={item.colors[0].image}
                        alt={item.label}
                        className="w-full h-[60px] object-contain mb-[10px]"
                      />
                      <p className="2xl:text-[12px] md:text-[10px] text-[8px] text-center uppercase">{item.label}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Slider Buttons */}
              <div className="flex justify-center gap-2 mt-3">
                <button
                  onClick={() => thumbSwiperRef.current?.slidePrev()}
                  className={`2xl:w-[40px] w-[30px] 2xl:h-[40px] h-[30px] rounded-full bg-[#9C9C9C] flex items-center justify-center transition-opacity duration-300 cursor-pointer hover:bg-[#5E5E5E] ${isBeginning ? 'opacity-[0.5] pointer-events-none' : 'opacity-100'
                    }`}
                >
                  <svg className="2xl:max-w-[20px] max-w-[15px]" viewBox="0 0 20 12">
                    <path
                      d="M10.5997 8.2502L2.15515 0.297119L0.783936 1.75307L10.6872 11.08L19.4788 1.70931L18.0203 0.340879L10.5997 8.2502Z"
                      fill="white"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => thumbSwiperRef.current?.slideNext()}
                  className={`2xl:w-[40px] w-[30px] 2xl:h-[40px] h-[30px] rounded-full bg-[#9C9C9C] flex items-center justify-center transition-opacity duration-300 cursor-pointer hover:bg-[#5E5E5E] ${isEnd ? 'opacity-[0.5] pointer-events-none' : 'opacity-100'
                    }`}
                >
                  <svg className="2xl:max-w-[20px] max-w-[15px]" viewBox="0 0 20 12">
                    <path
                      d="M10.6003 3.12687L2.15576 11.08L0.784546 9.62401L10.6878 0.297093L19.4794 9.66777L18.0209 11.0362L10.6003 3.12687Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
