import InnerHero from "@/components/common/InnerHero";
import AccessorySection from "@/components/features/parts/AccessorySection";
import AdviceSection from "@/components/features/parts/AdviceSection";
import FeatureSection from "@/components/features/parts/FeatureSection";
import GallerySection from "@/components/features/parts/GallerySection";
import MaintenanceSection from "@/components/features/parts/MaintenanceSection";
import MotocraftSection from "@/components/features/parts/MotocraftSection";
import PartsSection from "@/components/features/parts/PartsSection";
import WhymotocraftSection from "@/components/features/parts/WhymotocraftSection";
import ServiceBranchDirectory from "@/components/features/service/ServiceBranchDirectory";

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
    AdviceSection: {
        title: "Safety Advice",
        advice_list: [
            {
                icon: {
                    url: "/images/advice_icon-1.svg",
                    alt: "advice_img"
                },
                title: "Always switch off the ignition <br/> before checks"
            },
            {
                icon: {
                    url: "/images/advice_icon-2.svg",
                    alt: "advice_img"
                },
                title: "Don’t open filler caps <br/> when the engine is hot"
            },
            {
                icon: {
                    url: "/images/advice_icon-3.svg",
                    alt: "advice_img"
                },
                title: "Avoid applying polish to <br/> windshields to prevent wiper issues"
            },
        ]

    }
    ,
    AccessorySection: {
        media: {
            url: "/images/assosoryImg.jpg",
            alt: "Accessories-info",
        },
        title: "Ford Accessories: <br/> Personalize your Ford",
        description:
            "Have your vehicle serviced regularly to maintain its performance, safety, and resale value. With a wide network of Ford Authorised Parts Outlets and Service Centres, keeping your Ford in prime condition has never been easier. ",
        button_text: "View More",
        button: {
            link: "/",
            isExternal: false,
        },
    },
    FeatureSection: {
        title: "Key Features",
        advice_list: [
            {
                icon: {
                    url: "/images/feature_icon1.svg",
                    alt: "advice_img"
                },
                title: "Designed and tested by Ford engineers"
            },
            {
                icon: {
                    url: "/images/feature_icon2.svg",
                    alt: "advice_img"
                },
                title: "Maintains vehicle warranty and resale value"
            },
            {
                icon: {
                    url: "/images/feature_icon3.svg",
                    alt: "advice_img"
                },
                title: "Seamless integration with your vehicle’s design"
            },
            {
                icon: {
                    url: "/images/feature_icon4.svg",
                    alt: "advice_img"
                },
                title: "Installed by Ford-trained technicians"
            },
        ]

    },

    GallerySection: {
        title: "Gallery",
        slides: [
            {
                id: 1,
                images: [
                    {
                        "url": "/images/gallery-1.jpg",
                        "alt": "Ford technician servicing vehicle"
                    },
                    {
                        "url": "/images/gallery-2.jpg",
                        "alt": "Technician inspecting vehicle underside"
                    },
                    {
                        "url": "/images/gallery-3.jpg",
                        "alt": "Ford mechanic repairing engine"
                    },
                    {
                        "url": "/images/gallery-4.jpg",
                        "alt": "Technician working on vehicle maintenance"
                    } ,
                    {
                        "url": "/images/gallery-4.jpg",
                        "alt": "Ford service center"
                    },
                    {
                        "url": "/images/gallery-3.jpg",
                        "alt": "Vehicle inspection service"
                    },
                    {
                        "url": "/images/gallery-2.jpg",
                        "alt": "Engine maintenance"
                    },
                    {
                        "url": "/images/gallery-1.jpg",
                        "alt": "Ford repair workshop"
                    }
                ]
            }
        ]
    },

    MotorcraftSection: {
        title: "Motorcraft: Quality You Can Trust",
        description: "Motorcraft® parts are the official parts brand of Ford Motor Company—trusted by Ford service centers around the world. Whether it’s a routine oil change or a complex transmission assembly, Motorcraft® ensures that your vehicle runs the way it was built to.",

        button: {
            text: "Download brochure",
            link: "/brochure.pdf"
        },

        media: {
            url: "/images/motorcraft.jpg",
            alt: "Motorcraft technician working on vehicle"
        },

        features: [
            {
                title: "Each part is tested under extreme conditions to deliver"
            },
            {
                title: "Precision Fit",
                description: "Engineered for Ford, Lincoln, and Mercury vehicles"
            },
            {
                title: "Proven Reliability",
                description: "Lab-tested and road-verified"
            },
            {
                title: "Top Performance",
                description: "Maintains peak fuel efficiency and safety"
            },
            {
                title: "Broad Range",
                description: "Includes batteries, brake pads, filters, spark plugs, engine oils, and more"
            }
        ]
    },

    WhymotocraftSection: {
        title: "Why Motorcraft",
        media: {
            url: "/images/whyCraft.png",
            alt: "Motorcraft technician working on vehicle"
        },
        features: [
            "Product line depth and breadth",
            "The perfect fit",
            "Less shop time",
            "Factory innovations and upgrades",
            "Tested Tough",
            "Backed By Ford"
        ],
    },

    branchDirectory: {
        title: "Branch Directory",
        cards: [
            {
                id: 1,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 2,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 3,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 4,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 5,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 6,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 7,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 8,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 9,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 10,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 11,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
            {
                id: 12,
                title: "Seeb",
                description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
                phone: "+968 24516668",
                timing: "10 am to 6 pm",
                directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
            },
        ],
    },

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
            <AccessorySection data={local_data?.AccessorySection} />
            <FeatureSection data={local_data?.FeatureSection} />
            <GallerySection data={local_data?.GallerySection} />
            <MotocraftSection data={local_data?.MotorcraftSection} />
            <WhymotocraftSection data={local_data?.WhymotocraftSection} />
            <ServiceBranchDirectory data={local_data?.branchDirectory} />
        </>
    );
}