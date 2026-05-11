import InnerHero from "@/components/common/InnerHero";
import AboutSection from "@/components/features/about/AboutSection";
import ContactSection from "@/components/features/about/ContactSection";
import FindfordSection from "@/components/features/about/FindfordSection";

const local_data = {
    banner: {
        enable__disable_banner_section: true,
        enable__disable_gradient: true,
        desktop_image: {
            title: "aboutBanner",
            alt: "aboutBanner",
            url: "/images/aboutBanner.jpg",
        },
        mobile_image: {
            title: "aboutBanner",
            alt: "aboutBanner",
            url: "/images/aboutBanner.jpg",
        },
        title: "About Us",
    },

    aboutSection: {
        "title": "Ford Oman:",
        "highlight": "A Legacy Of Excellence",
        "description": "Arabian Car Marketing Co. LLC is the official distributor of Ford vehicles in the Sultanate of Oman. With a strong legacy of automotive excellence, we deliver advanced vehicle technology, exceptional customer service, and a network of showrooms and service centers across the country. Our partnership with Ford Motor Company stands on shared values of durability, performance, and innovation.",
        "mapImage": "/images/about/oman-map.png",
        "stats": [
            {
                "id": 1,
                "value": '25+',
                "label": "Ford Models"
            },
            {
                "id": 2,
                "value": '20+',
                "label": "Branches"
            },
            {
                "id": 3,
                "value": '1000+',
                "label": "Satisfied Customers"
            },
            {
                "id": 4,
                "value": "Full Range",
                "label": "Of Ford Vehicles"
            }
        ]
    },

    findFordSection: {
        title: "Find A Ford Near You",
        description: "With an extensive network of branches and service centers across Oman, you're never far from a Ford expert. Visit any of our locations for sales, support, and service.",
        locations: [
            { id: 1, name: "Ford Muscat - Wattayah", lat: 23.601, lng: 58.565, address: "Wattayah, Muscat, Oman" },
            { id: 2, name: "Ford Muscat - Al Ghubrah", lat: 23.585, lng: 58.375, address: "Al Ghubrah, Muscat, Oman" },
            { id: 3, name: "Ford Salalah", lat: 17.021, lng: 54.101, address: "Salalah Industrial Area, Oman" },
            { id: 4, name: "Ford Sohar", lat: 24.364, lng: 56.711, address: "Sohar Main Road, Oman" },
            { id: 5, name: "Ford Nizwa", lat: 22.923, lng: 57.534, address: "Nizwa, Oman" },
            { id: 6, name: "Ford Sur", lat: 22.564, lng: 59.522, address: "Sur, Oman" },
            { id: 7, name: "Ford Ibri", lat: 23.232, lng: 56.516, address: "Ibri, Oman" },
            { id: 8, name: "Ford Barka", lat: 23.702, lng: 57.886, address: "Barka, Oman" },
            { id: 9, name: "Ford Ibra", lat: 22.691, lng: 58.547, address: "Ibra, Oman" },
            { id: 10, name: "Ford Buraimi", lat: 24.251, lng: 55.761, address: "Buraimi, Oman" },
        ]
    },

    connectsection: {
        title: "Connect with Us",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        button_text: "Contact Us",
        button: {
            link: "/", 
        },
    },


};

export default function Page({ data = local_data }) {
    return (
        <>
            {data?.banner?.enable__disable_banner_section && (
                <InnerHero data={data?.banner} />
            )}
            <AboutSection data={data?.aboutSection} />
            <FindfordSection data={data?.findFordSection} />
            <ContactSection data={data?.connectsection} />
        </>
    );
}