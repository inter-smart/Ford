import InnerHero from "@/components/common/InnerHero";
import ShowroomSection from "@/components/features/showroom/ShowroomSection";


const local_data = {
    banner: {
        enable__disable_banner_section: true,
        desktop_image: {
            alt: "showroomBanner",
            url: "/images/showroom-banner.jpg",
        },
        mobile_image: {
            alt: "showroomBanner",
            url: "/images/showroom-banner.jpg",
        },
        title: "Showroom and Service Center",

    },

    showroomSection: {
        title: "Showroom",
        tabs: [
            {
                id: 1,
                label: "Showroom",
                active: true
            },
            {
                id: 2,
                label: "Service Center",
                active: false
            }
        ],

         locations: [
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
    }
}
export default function page({ data = local_data }) {
    return (
        <>
            {data?.banner?.enable__disable_banner_section && (
                <InnerHero data={local_data?.banner} />
            )}
            <ShowroomSection data={local_data?.showroomSection} />
        </>
    );
}