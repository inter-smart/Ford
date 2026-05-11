import InnerHero from "@/components/common/InnerHero";
import AboutSection from "@/components/features/about/AboutSection";
import ContactSection from "@/components/features/about/ContactSection";
import FindfordSection from "@/components/features/about/FindfordSection";
import PartsSection from "@/components/features/parts/PartsSection";

const local_data = {
    banner: {
        enable__disable_banner_section: true,
        enable__disable_gradient: true,
        desktop_image: {
            title: "partsBanner",
            alt: "partsBanner",
            url: "/images/partsBanner.jpg",
        },
        mobile_image: {
            title: "partsBanner",
            alt: "partsBanner",
            url: "/images/partsBanner.jpg",
        },
        button_text: "Contact Us",
        button: {
            link: "/",
            isExternal: false,
        },
        title: "Parts and Service",
    },

};

export default function Page({ data = local_data }) {
    return (
        <>
            {data?.banner?.enable__disable_banner_section && (
                <InnerHero data={data?.banner} />
            )}
            <PartsSection />
        </>
    );
}