"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from 'react';


export default function LocationSection() {
    return (
        <section className="w-full relative bg-[#F0F0F0] 2xl:py-[75px_20px] xl:py-[60px_10px] py-[40px_10px] z-0 overflow-hidden">
            <div className="container">
                <div className="w-full h-full 2xl:p-[125px_165px] xl:p-[110px_95px] md:p-[60px_40px] sm:p-[30px_20px] p-[25px_15px] rounded-[10px] overflow-hidden flex items-center relative
                    after:content-[''] after:absolute after:top-0 after:left-0 after:sm:w-[50%] after:w-[100%]  after:h-full after:opacity-70
                    after:bg-[linear-gradient(90deg,_#00095B_0.13%,_rgba(0,_9,_91,_0)_99.86%)]
                    before:content-[''] before:absolute before:top-0 before:right-0 before:w-[50%] before:opacity-60 before:z-1 before:h-full
                    before:bg-[linear-gradient(270deg,_#00095B_0.13%,_rgba(0,_9,_91,_0)_99.86%)]">

                    <Image
                        src="/images/locationBanner.jpg"
                        alt="locationImg"
                        width={490}
                        height={490}
                        className="w-full h-full object-cover duration-300 absolute top-0 left-0 "
                    />
                    <div className="w-full flex flex-wrap justify-between relative z-1 gap-3">
                        <div className="relative w-full z-0 2xl:max-w-[450px] lg:max-w-[380px] md:max-w-[300px] max:md:mb-[50px]">
                            <Heading size="heading1" as="h2"
                                className="text-white mb-[10px]">
                                Locate a <br className="max-md:hidden" />
                                Showroom
                            </Heading>
                            <Text size="text2" as="p"
                                className="text-white mb-[20px]" >
                                Lorem ipsum dolor sit amet consectetur Zenonem Quae
                                quidem sapientes sequuntur
                            </Text>
                            <Button
                                variant="outline"
                                className="md:text-[14px] sm:text-[12px] text-[10px]  font-medium w-full h-[40px] mb-[15px] relative flex items-center justify-start
                                 transition-all shadow-0 2xl:max-w-[400px] md:max-w-[350px] rounded-[5px] 
                                px-[15px] bg-white text-gray-800 hover:bg-gray-100 cursor-pointer group hover:text-[#1A73E8]" >
                                <div className="w-[17px] h-[17px] transition-all group-hover:scale-[1.3]">
                                    <svg viewBox="0 0 17 17" className="group-hover:fill-[#1A73E8]">

                                        <path d="M16.1094 7.66992H14.4002C14.1598 4.86298 11.9163 2.61948 9.10938 2.37917V0.669922C9.10938 0.393797 8.8855 0.169922 8.60938 0.169922C8.33325 0.169922 8.10938 0.393797 8.10938 0.669922V2.37917C5.30244 2.61948 3.05888 4.86298 2.81859 7.66992H1.10938C0.83325 7.66992 0.609375 7.8938 0.609375 8.16992C0.609375 8.44605 0.83325 8.66992 1.10938 8.66992H2.81859C3.05891 11.4769 5.30244 13.7204 8.10938 13.9607V15.6699C8.10938 15.946 8.33325 16.1699 8.60938 16.1699C8.8855 16.1699 9.10938 15.946 9.10938 15.6699V13.9607C11.9163 13.7204 14.1598 11.4769 14.4001 8.66992H16.1094C16.3855 8.66992 16.6094 8.44605 16.6094 8.16992C16.6094 7.8938 16.3855 7.66992 16.1094 7.66992ZM9.10938 12.9565V11.2949C9.10938 11.0188 8.8855 10.7949 8.60938 10.7949C8.33325 10.7949 8.10938 11.0188 8.10938 11.2949V12.9565C5.85419 12.7227 4.05663 10.9251 3.82275 8.66992H5.48434C5.76047 8.66992 5.98434 8.44605 5.98434 8.16992C5.98434 7.8938 5.76047 7.66992 5.48434 7.66992H3.82272C4.05656 5.41477 5.85419 3.61717 8.10938 3.3833V5.04489C8.10938 5.32102 8.33325 5.54489 8.60938 5.54489C8.8855 5.54489 9.10938 5.32102 9.10938 5.04489V3.3833C11.3646 3.61717 13.1621 5.41477 13.396 7.66992H11.7344C11.4583 7.66992 11.2344 7.8938 11.2344 8.16992C11.2344 8.44605 11.4583 8.66992 11.7344 8.66992H13.396C13.1621 10.9251 11.3645 12.7227 9.10938 12.9565Z" />

                                        <defs>
                                            <path width="16" height="16" fill="white" transform="translate(0.609375 0.169922)" >
                                            </path>
                                        </defs>
                                    </svg>
                                </div>
                                <span>Use my current location</span>
                            </Button>
                            {/* Search Input + Icon */}
                            <div className="relative w-full 2xl:max-w-[400px] md:max-w-[350px]">
                                <Input
                                    type="text"
                                    placeholder="Enter Street, Suburb, State or distributor"
                                    className="md:text-[14px] sm:text-[12px] text-[10px] h-[40px] ltr:pr-10 ltr:pl-4 rtl:pl-10 rtl:pr-4  text-[#6F6F6F] bg-white rounded-[5px]
                                    border-none shadow-none outline-none 
                                    focus:outline-none focus:border-none focus:ring-0 focus:shadow-none"
                                />
                                <Button className="absolute top-0 ltr:right-[15px] rtl:left-[15px] bottom-0 my-auto w-[17px] h-[17px] cursor-pointer group">
                                    <svg viewBox="0 0 18 18" className="group-hover:scale-[1.5] transition-all">
                                        <path
                                            d="M7.9349 0.814453C3.80263 0.814453 0.436523 4.18055 0.436523 8.31284C0.436523 12.4451 3.80263 15.8178 7.9349 15.8178C9.69991 15.8178 11.3232 15.1992 12.6061 14.1722L15.7295 17.2939C15.8871 17.445 16.0976 17.5284 16.316 17.5262C16.5343 17.5239 16.7431 17.4363 16.8976 17.282C17.0521 17.1277 17.14 16.9191 17.1425 16.7008C17.1451 16.4825 17.062 16.2718 16.9111 16.114L13.7878 12.9906C14.8156 11.7057 15.4349 10.0799 15.4349 8.31284C15.4349 4.18055 12.0672 0.814453 7.9349 0.814453ZM7.9349 2.48115C11.1664 2.48115 13.7666 5.08131 13.7666 8.31284C13.7666 11.5444 11.1664 14.1511 7.9349 14.1511C4.70336 14.1511 2.10319 11.5444 2.10319 8.31284C2.10319 5.08131 4.70336 2.48115 7.9349 2.48115Z"
                                            fill="#010203"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className="relative w-full z-0 2xl:max-w-[400px] lg:max-w-[380px] md:max-w-[300px]">
                            <Heading size="heading1" as="h2"
                                className="text-white mb-[10px]">
                                Locate a <br className="max-md:hidden" />
                                Service Center
                            </Heading>
                            <Text size="text2" as="p"
                                className="text-white mb-[20px]" >
                                Lorem ipsum dolor sit amet consectetur Zenonem Quae
                                quidem sapientes sequuntur
                            </Text>
                            <Button
                                variant="outline"
                                className="md:text-[14px] sm:text-[12px] text-[10px]  font-medium w-full h-[40px] mb-[15px] relative flex items-center justify-start transition-all 2xl:max-w-[400px] md:max-w-[350px] shadow-0 rounded-[5px] 
                                px-[15px] bg-white text-gray-800 hover:bg-gray-100 cursor-pointer group hover:text-[#1A73E8]" >
                                <div className="w-[17px] h-[17px] transition-all group-hover:scale-[1.3]">
                                    <svg viewBox="0 0 17 17" className="group-hover:fill-[#1A73E8]">

                                        <path d="M16.1094 7.66992H14.4002C14.1598 4.86298 11.9163 2.61948 9.10938 2.37917V0.669922C9.10938 0.393797 8.8855 0.169922 8.60938 0.169922C8.33325 0.169922 8.10938 0.393797 8.10938 0.669922V2.37917C5.30244 2.61948 3.05888 4.86298 2.81859 7.66992H1.10938C0.83325 7.66992 0.609375 7.8938 0.609375 8.16992C0.609375 8.44605 0.83325 8.66992 1.10938 8.66992H2.81859C3.05891 11.4769 5.30244 13.7204 8.10938 13.9607V15.6699C8.10938 15.946 8.33325 16.1699 8.60938 16.1699C8.8855 16.1699 9.10938 15.946 9.10938 15.6699V13.9607C11.9163 13.7204 14.1598 11.4769 14.4001 8.66992H16.1094C16.3855 8.66992 16.6094 8.44605 16.6094 8.16992C16.6094 7.8938 16.3855 7.66992 16.1094 7.66992ZM9.10938 12.9565V11.2949C9.10938 11.0188 8.8855 10.7949 8.60938 10.7949C8.33325 10.7949 8.10938 11.0188 8.10938 11.2949V12.9565C5.85419 12.7227 4.05663 10.9251 3.82275 8.66992H5.48434C5.76047 8.66992 5.98434 8.44605 5.98434 8.16992C5.98434 7.8938 5.76047 7.66992 5.48434 7.66992H3.82272C4.05656 5.41477 5.85419 3.61717 8.10938 3.3833V5.04489C8.10938 5.32102 8.33325 5.54489 8.60938 5.54489C8.8855 5.54489 9.10938 5.32102 9.10938 5.04489V3.3833C11.3646 3.61717 13.1621 5.41477 13.396 7.66992H11.7344C11.4583 7.66992 11.2344 7.8938 11.2344 8.16992C11.2344 8.44605 11.4583 8.66992 11.7344 8.66992H13.396C13.1621 10.9251 11.3645 12.7227 9.10938 12.9565Z" />

                                        <defs>
                                            <path width="16" height="16" fill="white" transform="translate(0.609375 0.169922)" >
                                            </path>
                                        </defs>
                                    </svg>
                                </div>
                                <span>Use my current location</span>
                            </Button>

                            {/* Search Input + Icon */}
                            <div className="relative w-full md:max-w-[500px]">
                                <Input
                                    type="text"
                                    placeholder="Enter Street, Suburb, State or distributor"
                                    className="md:text-[14px] sm:text-[12px] text-[10px] h-[40px] ltr:pr-10 ltr:pl-4 rtl:pl-10 rtl:pr-4  text-[#6F6F6F] bg-white rounded-[5px]
                                    border-none shadow-none outline-none 
                                    focus:outline-none focus:border-none focus:ring-0 focus:shadow-none"
                                />
                                <Button className="absolute top-0 ltr:right-[15px] rtl:left-[15px] bottom-0 my-auto w-[17px] h-[17px] cursor-pointer group">
                                    <svg viewBox="0 0 18 18" className="group-hover:scale-[1.5] transition-all">
                                        <path
                                            d="M7.9349 0.814453C3.80263 0.814453 0.436523 4.18055 0.436523 8.31284C0.436523 12.4451 3.80263 15.8178 7.9349 15.8178C9.69991 15.8178 11.3232 15.1992 12.6061 14.1722L15.7295 17.2939C15.8871 17.445 16.0976 17.5284 16.316 17.5262C16.5343 17.5239 16.7431 17.4363 16.8976 17.282C17.0521 17.1277 17.14 16.9191 17.1425 16.7008C17.1451 16.4825 17.062 16.2718 16.9111 16.114L13.7878 12.9906C14.8156 11.7057 15.4349 10.0799 15.4349 8.31284C15.4349 4.18055 12.0672 0.814453 7.9349 0.814453ZM7.9349 2.48115C11.1664 2.48115 13.7666 5.08131 13.7666 8.31284C13.7666 11.5444 11.1664 14.1511 7.9349 14.1511C4.70336 14.1511 2.10319 11.5444 2.10319 8.31284C2.10319 5.08131 4.70336 2.48115 7.9349 2.48115Z"
                                            fill="#010203"
                                        />
                                    </svg>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
