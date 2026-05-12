import InnerHero from "@/components/common/InnerHero";
import AdviceSection from "@/components/features/parts/AdviceSection";
import MaintenanceSection from "@/components/features/parts/MaintenanceSection";
import PartsSection from "@/components/features/parts/PartsSection"; 

const local_data = {
    banner: {
        enable__disable_banner_section: true,
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
    partsection: {
        media: {
            url: "/images/partImg.jpg",
            alt: "service-info",
        },
        sectionTitle: "Parts",
        tabs: [
            {
                id: 1,
                title: "Parts",
                slug: "/parts",
            },
            {
                id: 2,
                title: "Service",
                slug: "/service",
            },
        ],
        title: "Maintenance and Genuine Care",
        description:
            " Have your vehicle serviced regularly to maintain its performance, safety, and resale value. With a wide network of Ford Authorised Parts Outlets and Service Centres, keeping your Ford in prime condition has never been easier. ",
    },

    maintenanceSection: {
        title: "Maintenance Checklist",
        description: "Your Fords Maintenance Essentials",
        media: {
            url: "/images/maintenace.jpg",
            alt: "maintenace-img",
        },
        dailyChecks: {
            title: "Daily Checks",

            items: [
                "Exterior lamps",
                "Interior lamps",
                "Warning lamps and indicators"
            ]
        },
        monthlyChecks: {
            title: "Monthly Checks",

            items: [
                "Engine coolant level and engine oil",
                "Power steering and brake fluid",
                "Air conditioning system",
                "Horn",
                "Wheel nut tightness",
                "Radiator seals",
                "Tyre condition and pressure"
            ]
        }

    },
    AdviceSection : {
        title: "Safety Advice",
        advice_list:[
            {
                icon: {
                    url: "/images/advice_icon-1.svg",
                    alt:"advice_img"
                },
                title: "Always switch off the ignition <br/> before checks"
            },
            {
                icon: {
                    url: "/images/advice_icon-2.svg",
                    alt:"advice_img"
                },
                title: "Don’t open filler caps <br/> when the engine is hot"
            },
            {
                icon: {
                    url: "/images/advice_icon-3.svg",
                    alt:"advice_img"
                },
                title: "Avoid applying polish to <br/> windshields to prevent wiper issues"
            },
        ]

    }

};

export default function Page({ data = local_data }) {
    return (
        <>
            {data?.banner?.enable__disable_banner_section && (
                <InnerHero data={local_data?.banner} />
            )}
            <PartsSection data={local_data?.partsection} />
            <MaintenanceSection data={local_data?.maintenanceSection} />
           <AdviceSection data={local_data?.AdviceSection} />
        </>
    );
}