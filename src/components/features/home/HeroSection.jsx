"use client";

import VerticalSlider from "./HomeSlider";


export default function HeroSection() {


  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] relative z-0">
      <video
        autoPlay
        preload="auto"
        width={1920}
        height={1080}
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0"
        aria-label="Background video"
      >
        <source src="/videos/hero-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container w-full h-full">
        <div className="relative w-full h-full">
          <div className="w-full max-w-[650px] absolute bottom-[75px] left-0">
            <div className="text-[54px] text-white font-medium ">
              Discover the
              New Era of Ford in Oman
            </div>
          </div>
        </div>
      </div>
      <VerticalSlider />
    </section>

  );
}
