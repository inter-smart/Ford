import InnerHero from "@/components/common/InnerHero";
import ClientSection from "@/components/features/client/ClientSection";
const local_data = {
  banner: {
    enable__disable_banner_section: true,
    desktop_image: {
      alt: "contactBanner",
      url: "/images/client.jpg",
    },
    mobile_image: {
      alt: "contactBanner",
      url: "/images/client.jpg",
    },
    title: "Clients",
    button_text: null,
    button: null,
  },
  ClientSection: {
    title: "Our Clients",
    testimonials: [
      {
        id: 1,
        name: "Stella George",
        date: "15 Jul 2025",
        rating: 5.0,
        image: {
          url: "/images/avatar-1.png",
          alt: "Stella George",
        },
        review:
          "Wonderful Experience. Their Team Went Above And Beyond My Expectations. They Drove My New Vehicle To Meet Me Halfway Due To The Distance I’m Located From The Dealership.",
      },
      {
        id: 2,
        name: "Stanley",
        date: "15 Jul 2025",
        rating: 5.0,
        image: {
          url: "/images/avatar-2.png",
          alt: "Stanley",
        },
        review:
          "Excellent Experience From Start To Finish, Worked With Nate And Luke. Great Communication, Great Trade In Price And Family Friendly Atmosphere.",
      },
      {
        id: 3,
        name: "Sania John",
        date: "15 Jul 2025",
        rating: 5.0,
        image: {
          url: "/images/avatar-1.png",
          alt: "Sania John",
        },
        review:
          "Just Bought Our 2025 Explorer ST From Middleton Ford. Really Nice SUV, Love The New Features! Middleton Ford Is Great To Work With!",
      },
      {
        id: 4,
        name: "Tarson",
        date: "15 Jul 2025",
        rating: 5.0,
        image: {
          url: "/images/avatar-2.png",
          alt: "Tarson",
        },
        review:
          "After Purchasing Another New Car From Middleton Ford Within The Last Year, I Can Confidently Say That This Is The Place To Be For Exceptional Customer Service. Trevor, My Sales Consultant, And Cory, The Sales Manager, Have Been An Absolute Pleasure To Work With. Their Professionalism, Attentiveness, And Friendly Demeanor Made The Entire Process Smooth And Enjoyable. I Feel Honored To Be Part Of The Middleton Ford Team!",
      },
      {
        id: 5,
        name: "Derita",
        date: "15 Jul 2025",
        rating: 5.0,
        image: {
          url: "/images/avatar-1.png",
          alt: "Derita",
        },
        review:
          "Wonderful Experience. Their Team Went Above And Beyond My Expectations. They Drove My New Vehicle To Meet Me Halfway Due To The Distance I’m Located From The Dealership.",
      },
      {
        id: 6,
        name: "Romine",
        date: "15 Jul 2025",
        rating: 5.0,
        image: {
          url: "/images/avatar-2.png",
          alt: "Romine",
        },
        review:
          "I Have Had Some Bad Experiences With Other Dealerships In The Past. I Was Beginning To Believe All Dealerships Were Not To Be Trusted. Middleton Ford And Brad Were Top Notch! I Highly Recommend Them And Will Tell Others And Will Be Back To Do Business With Them. Highly Recommended Them! Straight Forward With No BS! Randy",
      },
    ],
  },
};
export default function page({ data = local_data }) {
  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={local_data?.banner} />
      )}
      <ClientSection data={local_data?.ClientSection} />
    </>
  );
}
