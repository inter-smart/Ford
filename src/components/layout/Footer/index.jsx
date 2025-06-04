
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import Link from 'next/link';
export default function welcome() {
    return (
        <section className="w-full relative bg-[#00095B] 2xl:py-[65px] xl:py-[50px] py-[40px] z-0 overflow-hidden ">
            <div className="container">
                <div className="max-w-full mx-auto bg-[#010D7E] rounded-[16px] py-[50px] px-[30px] pr-[95px] mb-[50px] 
                    flex flex-col md:flex-row justify-between items-center
                    relative overflow-hidden 
                    after:absolute after:content-[''] after:right-0 after:top-0 after:bottom-0 
                    after:w-[480px] after:h-[480px] after:rounded-l-full after:bg-[#15229F] after:m-auto">

                    {/* Left Content */}
                    <div className="text-white max-w-[580px] mb-6 md:mb-0">
                        <h2 className="2xl:text-[28px] xl:text-[25px] text-white font-medium  mb-2">Do you need help?</h2>
                        <Text size="text2" as="p"
                            className="text-white/60">
                            We will provide detailed information about our services, types of work,
                            and top projects. We will calculate the cost and prepare a commercial proposal.
                        </Text>
                    </div>

                    {/* Right Button */}
                    <div className="relative z-10">
                        <Link
                            href="/book-test-drive"
                            className="relative
                                3xl:text-[20px] 2xl:text-[17px] xl:text-[13px] lg:text-[12px] text-[12px] font-medium 
                                text-white text-sm md:text-base px-6 py-3 rounded-full flex items-center gap-2
                                transition-all duration-300 ease-in-out 
                                hover:tracking-wider" >
                            Book Test Drive
                            <div className="w-[17px] h-[17px] flex relative overflow-visible">
                                <svg
                                    viewBox="0 0 512 512"
                                    className="fill-white transition-transform duration-300 ease-in-out group-hover:translate-x-2" >
                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                                    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                                    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                                    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                                    />
                                </svg>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-[70px]">

                    {/* Column 1: SUVs & Cars */}
                    <div>
                        <h4 className="footer-heading"></h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="footer-link">Ford Expedition</Link></li>
                            <li><Link href="#" className="footer-link">Ford Mustang</Link></li>
                            <li><Link href="#" className="footer-link">Ford Territory</Link></li>
                            <li><Link href="#" className="footer-link">Ford Mustang Shelby</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Trucks & Vans */}
                    <div>
                        <h4 className="footer-heading">Trucks & Vans</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="footer-link">Ford F-150 Raptor</Link></li>
                            <li><Link href="#" className="footer-link">Ford F-150</Link></li>
                            <li><Link href="#" className="footer-link">Ford Super Duty</Link></li>
                            <li><Link href="#" className="footer-link">Ford Transit Custom</Link></li>
                            <li><Link href="#" className="footer-link">Ford Transit Van</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div>
                        <h4 className="footer-heading">Useful Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="footer-link">News and Events</Link></li>
                            <li><Link href="#" className="footer-link">Book a Service</Link></li>
                            <li><Link href="#" className="footer-link">Book a Test Drive</Link></li>
                            <li><Link href="#" className="footer-link">Terms and Conditions</Link></li>
                            <li><Link href="#" className="footer-link">Privacy Policy</Link></li>
                            <li><Link href="#" className="footer-link">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Customer Service */}
                    <div>
                        <h4 className="footer-heading">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="footer-link">Contact Us</Link></li>
                            <li><Link href="#" className="footer-link">Seeb</Link></li>
                            <li><Link href="#" className="footer-link">Barka</Link></li>
                            <li><Link href="#" className="footer-link">Salalah</Link></li>
                            <li><Link href="#" className="footer-link">Sohar</Link></li>
                            <li><Link href="#" className="footer-link">Ford Approved – Wattayah</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact & App */}
                    <div className="text-right flex flex-col items-start md:items-end">
                        <div>
                            <Link  href="tel:+1 981 981-23-19" className="w-[115px]">
                                <Image src="/images/logo.svg" alt="Ford Logo" width={80} height={30} className="w-full max-w-[115px] object-fill mb-[50px] ml-auto" />
                            </Link>
                            <div className="h-px w-10 bg-white opacity-20 ml-auto mb-[25px]" />
                            <ul>
                                <li><Link href="tel:+1 981 981-23-19" className="footer-link">+1 981 981-23-19</Link></li>
                                <li><Link href="mailto:hello@logoipsum.com" className="footer-link">hello@logoipsum.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
