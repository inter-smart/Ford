
import { Img } from "@/components/layout/Img";
import Link from "next/link";

export default async function NotFound() {
    return (
        <div className="w-full">
            <div
                className="w-full h-[50px] lg:h-[70px] 2xl:h-[80px] 3xl:h-[90px] block bg-black transition-all duration-300 "
            >
            </div>
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white text-center 3xl:py-[100px] xl:py-[60px] py-[30px] before:content-[''] before:block before:absolute before:z-0 before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0, .1)] before:backdrop-blur-[10px] before:pointer-events-none">
                <div className="absolute inset-0 -z-[1]">
                    <Img
                        src="404.jpg"
                        alt="404 Background"
                        fill
                        sizes="100vw"
                        className="object-cover -z-1"
                    />
                </div>
                <div className="container z-10 flex flex-col items-center justify-center px-4">

                    <Img
                        src="404Ttle.png"
                        alt="404 Title"
                        width={400}
                        height={100}
                        className="object-contain mb-8 2xl:max-w-[500px] xl:max-w-[345px] md:max-w-[245px] max-w-[180px] w-full"
                    />
                    <div className="typography [&>h6]:text-white [&>p]:font-medium">
                        <h6 className="text-white">
                            Page Not Found
                        </h6>
                        <Link
                            href="/"
                            className="mt-6 inline-block text-sm text-white backdrop-blur-sm transition bg-black duration-500 ease-in-out hover:bg-[#F1D1A8] hover:text-[#060606] 3xl:px-[45px] 2xl:px-[35px] xl:px-[25px] px-[15px] 2xl:py-[15px] xl:py-[10px] py-[8px]"
                        >
                            Go Back home
                        </Link>
                    </div>

                </div>
            </section>
        </div >

    );
}
