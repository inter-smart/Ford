import InnerHero from "@/components/common/InnerHero"; 
import BranchSection from "@/components/features/contact/BranchSection";
import ContactFormSection from "@/components/features/contact/ContactFormSection";
import ContactMapSection from "@/components/features/contact/MapSection";

const local_data = {
    heroData: {
        title: "Contact Us",
        description: null,
        media: {
            type: "image",
            desktop: {
                path: "/images/contactBanner.jpg",
                alt: "hero",
            },
            mobile: {
                path: "/images/contactBanner.jpg",
                alt: "hero",
            },
        },
        button: null,
    },
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.heroData} />
            <ContactFormSection />
            <BranchSection />
            <ContactMapSection />
        </>
    )
}
