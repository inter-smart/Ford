"use client";
import OfferCard from "./OfferCard";
import React, { useState } from "react";

// const offers = [
//   {
//     slug: "complimentary-service-package",
//     image: "/images/offer-1.jpg",
//     title: "Complimentary Service Package",
//     subTitle: "Get free service for 3 years or 60,000 km",
//     description: "When you buy any new Ford SUV or pickup.",
//     btnTxt: "Enquire Now"
//   },
//   {
//     slug: "limited-time-cash-back",
//     image: "/images/offer-2.jpg",
//     title: "Limited-Time Cash Back",
//     subTitle: "Get up to OMR 2,000 cash back on select models this month only!",
//     description: "Don’t miss the deal.",
//     btnTxt: "Enquire Now"
//   },
//   {
//     slug: "corporate-and-fleet-offers",
//     image: "/images/offer-3.jpg",
//     title: "Corporate and Fleet offers",
//     subTitle: "Special pricing, extended warranty, and priority support",
//     description: "for corporate clients and SMEs.",
//     btnTxt: "Enquire Now"
//   },
//   {
//     slug: "",
//     image: "/images/offer-3.jpg",
//     title: "Corporate and Fleet offers",
//     subTitle: "Special pricing, extended warranty, and priority support",
//     description: "for corporate clients and SMEs.",
//     btnTxt: "Enquire Now"
//   },
//   {
//     slug: "",
//     image: "/images/offer-1.jpg",
//     title: "Complimentary Service Package",
//     subTitle: "Get free service for 3 years or 60,000 km",
//     description: "When you buy any new Ford SUV or pickup.",
//     btnTxt: "Enquire Now"
//   },
//   {
//     slug: "",
//     image: "/images/offer-2.jpg",
//     title: "Limited-Time Cash Back",
//     subTitle: "Get up to OMR 2,000 cash back on select models this month only!",
//     description: "Don’t miss the deal.",
//     btnTxt: "Enquire Now"
//   },
//   {
//     slug: "",
//     image: "/images/offer-1.jpg",
//     title: "Complimentary Service Package",
//     subTitle: "Get free service for 3 years or 60,000 km",
//     description: "When you buy any new Ford SUV or pickup.",
//     btnTxt: "Enquire Now"
//   },
//   {
//     image: "/images/offer-2.jpg",
//     title: "Limited-Time Cash Back",
//     subTitle: "Get up to OMR 2,000 cash back on select models this month only!",
//     description: "Don’t miss the deal.",
//     btnTxt: "Enquire Now"
//   },
// ];

export default function OfferListSection({ data }) {
    const offerList = Array.isArray(data) && data.length > 0 ? data : offers;
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const visibleOffers = offerList.slice(0, visibleCount);

    const buttonLabel = visibleCount >= offerList.length ? "No more offers" : "Loading More ...";
    return (
        <section className="w-full h-auto block my-[10px_20px] sm:my-[20px_40px] xl:my-[30px_74px] 2xl:my-[40px_90px] ">
            <div className="container">
                <div className="flex flex-wrap h-auto -mx-[0] sm:-mx-[-6px] xl:-mx-[-10px] 2xl:-mx-[-13px]">
                      {visibleOffers.map((item, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 h-auto p-[10px_0] sm:p-[20px_6px] xl:p-[40px_10px] 2xl:p-[50px_13px] opacity-0 translate-y-[20px] animate-fadeUp">
                            <OfferCard item={item} />
                        </div>
                    ))}
                </div>
                 {offerList.length > 6 && (
                    <div className="w-full flex justify-center mt-0">
                        <button
                            onClick={handleLoadMore}
                            disabled={visibleCount >= offerList.length}
                            className="text-[11px] xl:text-[14px] font-bold text-[#1577F0] px-6 py-3"
                        >
                        {buttonLabel}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}