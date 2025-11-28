"use client";
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Thumbs } from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from 'next/link';
import { Heading } from "@/components/layout/Heading";
import { motion, AnimatePresence } from 'framer-motion';

const sliderItems = [
  {
    label: 'CARS',
    carName: '2025 Ranger Raptor',
    colors: [
      { name: 'Arctic White', image: '/images/car1.png', code: '#FFFFFF' },
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Blue Lightning', image: '/images/car2.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car4.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/blackMustag.png', code: '#000000' },
    ],
    engine: '2.0L EcoBoost®',
    body: 'Coupe',
    transmission: '6-speed',
    hp: '250',
    drive: 'FWD',
  },
  {
    label: 'Trucks',
    colors: [
      { name: ' Grey', image: '/images/car4.png', code: '#7A7A7A' },
      { name: 'Arctic White', image: '/images/car3.png', code: '#FFFFFF' },
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Blue Lightning', image: '/images/car2.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car4.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/blackMustag.png', code: '#000000' },
    ],
    carName: '2025 Ranger Raptor',
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
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Blue Lightning', image: '/images/car2.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car4.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/blackMustag.png', code: '#000000' },
    ],
    carName: 'Ford Everest',
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
      { name: 'Blue Lightning', image: '/images/car2.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car4.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/blackMustag.png', code: '#000000' },
    ],
    carName: 'Mustang',
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
      { name: 'Arctic White', image: '/images/car3.png', code: '#FFFFFF' },
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Blue Lightning', image: '/images/car2.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car4.png', code: '#F76300' },
      { name: 'Shadow Black', image: '/images/blackMustag.png', code: '#000000' },
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
      { name: 'Shadow Black', image: '/images/blackMustag.png', code: '#FFFFFF' },
      { name: 'Command Grey', image: '/images/car2.png', code: '#7A7A7A' },
      { name: 'Blue Lightning', image: '/images/car2.png', code: '#005BBB' },
      { name: 'Code Orange', image: '/images/car4.png', code: '#F76300' },
    ],
    carName: 'MUSTANG GT 5.0',
    engine: '2.0L EcoBoost®',
    body: 'Coupe',
    transmission: '6-speed',
    hp: '250',
    drive: 'FWD',
  },
  // Add more car objects as needed...
];


export default function HeroSection() {

  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const thumbSwiperRef = useRef(null);
  const [swiperDirection, setSwiperDirection] = useState("vertical");

  const active = activeIndex !== null ? sliderItems[activeIndex] : null;

  useEffect(() => {
    const handleResize = () => {
      setSwiperDirection(window.innerWidth < 578 ? "horizontal" : "vertical");
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full xs:h-dvh min-h-[800px] xs:min-h-[670px] 2xl:min-h-[800px] relative z-0">

      <div
        className={`absolute top-0 right-0 flex justify-end h-full w-full text-white
         2xl:pb-[75px] pb-[45px] overflow-hidden transition-colors duration-500 ${activeIndex !== null ? 'bg-[#181818]' : 'bg-transparent'
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
          <div className="container w-full h-full max-xs:flex max-xs:items-end">
            <div className="relative w-full xs:h-full flex max-sm:flex-wrap items-end justify-between">
              <div
                className={`2xl:w-[calc(100%-135px)] lg:w-[calc(100%-110px)] w-[calc(100%-80px)] max-xs:mb-[30px] sm:max-w-[750px] max-w-[175px] ${activeIndex !== null ? 'hidden' : 'block'
                  }`}
              >
                <Heading
                  size="heading1"
                  as="h2"
                  className=" mb-[30px]"
                >
                  Discover the <br />New Era of Ford in Oman
                </Heading>

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
                  <div className="relative flex flex-col lg:justify-center justify-end w-full h-full  md:pb-[0px] pb-[110px] duration-500 ">
                    <button className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] bg-transparent cursor-pointer absolute top-[0] z-2 xs:top-[15%] 
                 rtl:3xl:left-[-6%] rtl:2xl:left-[-7%] rtl:lg:left-[-7%] rtl:md:left-[-9%] rtl:sm:left-[-10%] rtl:left-0
                 ltr:3xl:right-[-6%] ltr:2xl:right-[-7%] ltr:lg:right-[-7%] ltr:md:right-[-9%] ltr:sm:right-[-10%] ltr:right-0 group" onClick={() => setActiveIndex(null)}>
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <path
                          d="m4.59 59.41a2 2 0 0 0 2.83 0l24.58-24.58 
                    24.59 24.58a2 2 0 0 0 2.83-2.83l-24.59-24.58 
                    24.58-24.59a2 2 0 0 0 -2.83-2.83l-24.58 24.59
                    -24.59-24.58a2 2 0 0 0 -2.82 2.82l24.58 24.59
                    -24.58 24.59a2 2 0 0 0 0 2.82z"
                          className="fill-white group-hover:fill-[#2F6BAB]"
                        />
                      </svg>
                    </button>
                    <div className="w-full 3xl:max-h-[550px] max-h-[400px] 3xl:max-w-[calc(100%-200px)] lg:max-w-[calc(100%-80px)] xs:max-w-[calc(100%-30px)] relative z-1">
                      {/* car name and image  */}
                      <div className="realtive 2xl:min-h-[550px] min-h-[400px] flex items-end">


                        <div className="3xl:text-[120px] 2xl:text-[100px] xl:text-[65px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[35px] ltr:lg:text-right rtl:text-left font-medium text-transparent 
                          line-clamp-2 break-words absolute top-0 ltr:lg:right-0 rtl:lg:left-0 leading-[1.1] z-[-1] 
                          outlined-text 3xl:max-w-[830px] 2xl:max-w-[750px] lg:max-w-[450px] max-w-[400px] lg:ml-auto before:absolute 
                          before:content:'' before:left-0 before:w-full before:top-0 before:h-full " >
                          {active.carName}
                        </div>
                           
                        <motion.div
                          key={active.colors[selectedColorIndex].image}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.5}}
                        >
                          <div className="3xl:max-w-[850px] 2xl:max-w-[750px] xl:max-w-[620px] lg:max-w-[550px] max-w-[450px] 2xl:min-h-[550px] min-h-[400px] flex items-center lg:justify-center justify-start  animate-carMove">
                            <Image
                              src={active.colors[selectedColorIndex].image}
                              alt={active.label} width="850" height="450"
                              className="w-full h-full object-contain animate-carMove"
                            />
                          </div>
                        </motion.div> 
                      </div>
                      {/* color options button  */}
                      <div className='absolute lg:bottom-0 md:bottom-[80px] bottom-0 ltr:left-0 rtl:right-0'>
                        <button
                          onClick={() => setShowColorOptions(!showColorOptions)}
                          className="w-[32px] h-[32px] flex items-center justify-center absolute ltrleft-0 rtl:right-0 bottom-8 bg-[#A7A7A7] text-white p-[0] rounded-full
                    cursor-pointer hover:bg-orange/20 transition-all z-10"
                        >
                          <svg className='w-full h-full' viewBox="0 0 32 33" >
                            <circle cx="16" cy="16.9004" r="16" fill="#A7A7A7" />
                            <path d="M16 7.90039C11.03 7.90039 7 11.9304 7 16.9004C7 21.8704 11.03 25.9004 16 25.9004C16.83 25.9004 17.5 25.2304 17.5 24.4004C17.5 24.0104 17.35 23.6604 17.11 23.3904C16.88 23.1304 16.73 22.7804 16.73 22.4004C16.73 21.5704 17.4 20.9004 18.23 20.9004H20C22.76 20.9004 25 18.6604 25 15.9004C25 11.4804 20.97 7.90039 16 7.90039ZM10.5 16.9004C9.67 16.9004 9 16.2304 9 15.4004C9 14.5704 9.67 13.9004 10.5 13.9004C11.33 13.9004 12 14.5704 12 15.4004C12 16.2304 11.33 16.9004 10.5 16.9004ZM13.5 12.9004C12.67 12.9004 12 12.2304 12 11.4004C12 10.5704 12.67 9.90039 13.5 9.90039C14.33 9.90039 15 10.5704 15 11.4004C15 12.2304 14.33 12.9004 13.5 12.9004ZM18.5 12.9004C17.67 12.9004 17 12.2304 17 11.4004C17 10.5704 17.67 9.90039 18.5 9.90039C19.33 9.90039 20 10.5704 20 11.4004C20 12.2304 19.33 12.9004 18.5 12.9004ZM21.5 16.9004C20.67 16.9004 20 16.2304 20 15.4004C20 14.5704 20.67 13.9004 21.5 13.9004C22.33 13.9004 23 14.5704 23 15.4004C23 16.2304 22.33 16.9004 21.5 16.9004Z" fill="#323232" />
                          </svg>
                        </button>

                        {showColorOptions && active?.colors && (
                          <div className="absolute ltr:left-0 rtl:right-0 bottom-[80px]  bg-[#292929] rounded-lg px-[15px] py-[30px_10px] space-y-2 z-10 min-w-[160px]">
                            <button
                              onClick={() => setShowColorOptions(false)}
                              className="absolute top-2 ltr:right-2 rtl:left-2 text-white text-sm cursor-pointer transition-all hover:text-[#2F6BAB]"
                            >
                              ×
                            </button>
                            {active.colors.map((color, i) => (
                              <div
                                key={i}
                                onClick={() => setSelectedColorIndex(i)}
                                className={`flex items-center gap-2 cursor-pointer text-sm rounded-md border-transparent transition-all mb-[15px] ${i === selectedColorIndex
                                  ? ' '
                                  : ''
                                  }`}
                              >
                                <div
                                  className="w-[22px] h-[22px] flex items-center justify-center rounded-full"
                                  style={{ backgroundColor: color.code }}
                                >
                                  <svg
                                    className={`w-[10px] h-[10px] transition-all ${i === selectedColorIndex
                                      ? 'opacity-100'
                                      : 'opacity-0 group-hover:opacity-100'
                                      }`}
                                    viewBox="0 0 11 9"
                                    style={{
                                      fill:
                                        i === selectedColorIndex && color.code.toLowerCase() === '#ffffff'
                                          ? 'black'
                                          : 'white',
                                    }}
                                  >
                                    <path d="M3.34286 6.43241L0.910365 3.99991L0.0820312 4.82241L3.34286 8.08324L10.3429 1.08324L9.52037 0.260742L3.34286 6.43241Z" />
                                  </svg>
                                </div>

                                <span className="text-[10px] text-white">{color.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                    {/* car descriptions  */}

                    <div className="absolute bottom-0 ltr:left-0 rtl:right-0 w-full 3xl:max-w-[calc(100%-200px)] lg:max-w-[calc(100%-80px)] xs:max-w-[calc(100%-30px)] max-xs:mb-[20px]">
                      <div className="grid 2xl:grid-cols-[1fr_230px] xl:grid-cols-[1fr_200px] 3xs:grid-cols-[1fr_165px] grid-cols-[1fr_120px] gap-0">
                        {/* Left Empty Space */}
                        <div className="row-span-2"></div>

                        {/* Automatic Transmission */}
                        <div className="border border-white/10 3xl:p-[35px] md:p-[20px] 3xs:p-[12px] p-[10px] 2xl:w-[230px] xl:w-[200px] 3xs:w-[165px] w-[120px]">
                          <p className="2xl:text-[16px] md:text-[14px] text-[10px] font-medium text-[#707070]">Automatic Transmission</p>
                          <p className="2xl:text-[25px] xl:text-[22px] lg:text-[18px] md:text-[16px] 3xs:text-[12px] text-[10px] font-medium">{active.transmission}</p>
                        </div>

                        {/* Horsepower */}
                        <div className="border-l border border-white/10 3xl:p-[35px] md:p-[20px] 3xs:p-[12px] p-[10px] 2xl:w-[230px] xl:w-[200px] 3xs:w-[165px] w-[120px]">
                          <p className="2xl:text-[16px] md:text-[14px] text-[10px] font-medium text-[#707070]">Horsepower</p>
                          <p className="2xl:text-[25px] xl:text-[22px] lg:text-[18px] md:text-[16px] 3xs:text-[12px] text-[10px]  font-medium">{active.hp}</p>
                        </div>
                      </div>

                      {/* Bottom Specs Row */}
                      <div className="grid 2xl:grid-cols-[1fr_1fr_230px] xl:grid-cols-[1fr_1fr_200px] 3xs:grid-cols-[1fr_1fr_165px] grid-cols-[1fr_1fr_120px]  border-t border-white/10">
                        {/* Engine */}
                        <div className="3xl:p-[35px] md:p-[20px] 3xs:p-[12px] p-[10px] border border-white/10">
                          <p className="2xl:text-[16px] md:text-[14px] text-[10px] font-medium text-[#707070]">Engine</p>
                          <p className="2xl:text-[25px] xl:text-[22px] lg:text-[18px]  md:text-[16px] 3xs:text-[12px] text-[10px]  font-medium">{active.engine}</p>
                        </div>

                        {/* Bodystyle */}
                        <div className="3xl:p-[35px] md:p-[20px] 3xs:p-[12px] p-[10px] border border-white/10">
                          <p className="2xl:text-[16px] md:text-[14px] text-[10px] font-medium text-[#707070]">Bodystyle</p>
                          <p className="2xl:text-[25px] xl:text-[22px] lg:text-[18px]  md:text-[16px] 3xs:text-[12px] text-[10px]  font-medium">{active.body}</p>
                        </div>

                        {/* Drive System */}
                        <div className="3xl:p-[35px] md:p-[20px] 3xs:p-[12px] p-[10px] border border-white/10 2xl:w-[230px] xl:w-[200px] 3xs:w-[165px] w-[120px]">
                          <p className="2xl:text-[16px] md:text-[14px] text-[10px] font-medium text-[#707070]">Drive System</p>
                          <p className="2xl:text-[25px] xl:text-[22px] lg:text-[18px]  md:text-[16px] 3xs:text-[12px] text-[10px]  font-medium">{active.drive}</p>
                        </div>
                      </div>

                    </div>

                  </div>
                )} 

              {/*car Thumbnail Swiper */}

              <div className="2xl:w-[135px] lg:w-[110px] xs:w-[100px] w-full 2xl:h-[570px] xl:h-[450px] xs:h-[400px] h-[120px] 
                 flex flex-col items-center duration-500 rounded-[5px] overflow-hidden">
                <Swiper
                  direction={swiperDirection}
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
                  className="2xl:h-[calc(100%  - 50px)] xl: w-full bg-[rgba(187,187,187,0.3)] backdrop-blur-[20px] sm:p-[15px] p-[10px] rounded-[5px]"
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
                        <Image
                          width="100" height="100"
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
      </div >
    </section >

  );
}



