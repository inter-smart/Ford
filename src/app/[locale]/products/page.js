import InnerHero from "@/components/common/InnerHero";
import ProductListSection from "@/components/features/products/ProductListSection";

const local_data = {
  heroData: {
    title: "Product",
    description: null,
    media: {
      type: "image",
      desktop: {
        path: "/images/product-banner.jpg",
        alt: "hero",
      },
      mobile: {
        path: "/images/product-banner.jpg",
        alt: "hero",
      },
    },
    button: null,
  },
  productData: {
    items: [
      {
        id: 1,
        badge: null,
        modelName: "Taurus",
        slug: "/products/Taurus",
        modelCategory: "performance",
        media: {
          path: "/images/product-1.jpg",
          alt: "Ford Bronco",
        },
      },
      {
        id: 2,
        badge: null,
        modelName: "Mustang ",
        slug: "/products/Mustang",
        modelCategory: "sedan",
        media: {
          path: "/images/product-2.jpg",
          alt: "Mustang",
        },
      },
      {
        id: 3,
        badge: "New Arrival",
        modelName: "Bronco",
        slug: "/products/Bronco",
        modelCategory: "truck",
        media: {
          path: "/images/product-3.jpg",
          alt: "Bronco",
        },
      },
      {
        id: 4,
        badge: null,
        modelName: "Territory",
        slug: "/products/Territory",
        modelCategory: "commercial_vehicle",
        media: {
          path: "/images/product-4.jpg",
          alt: "Territory",
        },
      },
      {
        id: 5,
        badge: null,
        modelName: "Everest",
        slug: "/products/Everest",
        modelCategory: "performance",
        media: {
          path: "/images/product-5.jpg",
          alt: "Everest",
        },
      },
      {
        id: 6,
        badge: null,
        modelName: "Explorer",
        slug: "/products/Explorer",
        modelCategory: "suv",
        media: {
          path: "/images/product-6.jpg",
          alt: "Explorer",
        },
      },
      {
        id: 7,
        badge: null,
        modelName: "Taurus",
        slug: "/products/Taurus",
        modelCategory: "performance",
        media: {
          path: "/images/product-1.jpg",
          alt: "Ford Bronco",
        },
      },
      {
        id: 8,
        badge: "New Arrival",
        modelName: "Ranger Raptor",
        slug: "/products/Ranger Raptor",
        modelCategory: "sedan",
        media: {
          path: "/images/product-7.jpg",
          alt: "Ranger Raptor",
        },
      },
      {
        id: 9,
        badge: null,
        modelName: "F-150 Raptor",
        slug: "/products/F-150 Raptor",
        modelCategory: "sedan",
        media: {
          path: "/images/product-8.jpg",
          alt: "F-150 Raptor",
        },
      },
      {
        id: 10,
        badge: null,
        modelName: "Super duty",
        slug: "/products/Super duty",
        modelCategory: "sedan",
        media: {
          path: "/images/product-9.jpg",
          alt: "F-150 Raptor",
        },
      },
      {
        id: 11,
        badge: null,
        modelName: "F 150 tremor",
        slug: "/products/f 150 tremor",
        modelCategory: "sedan",
        media: {
          path: "/images/product-10.jpg",
          alt: "F-150 Raptor",
        },
      },
      {
        id: 12,
        badge: null,
        modelName: "Trainsit Custom",
        slug: "/products/Trainsit Custom",
        modelCategory: "performance",
        media: {
          path: "/images/product-11.jpg",
          alt: "Trainsit Custom",
        },
      },
      {
        id: 13,
        badge: null,
        modelName: "Taurus",
        slug: "/products/Taurus",
        modelCategory: "performance",
        media: {
          path: "/images/product-1.jpg",
          alt: "Ford Bronco",
        },
      },
      {
        id: 14,
        badge: null,
        modelName: "Mustang ",
        slug: "/products/Mustang",
        modelCategory: "sedan",
        media: {
          path: "/images/product-2.jpg",
          alt: "Mustang",
        },
      },
      {
        id: 15,
        badge: null,
        modelName: "Bronco",
        slug: "/products/Bronco",
        modelCategory: "truck",
        media: {
          path: "/images/product-3.jpg",
          alt: "Bronco",
        },
      },
      {
        id: 16,
        badge: null,
        modelName: "Territory",
        slug: "/products/Territory",
        modelCategory: "commercial_vehicle",
        media: {
          path: "/images/product-4.jpg",
          alt: "Territory",
        },
      },
      {
        id: 17,
        badge: null,
        modelName: "Everest",
        slug: "/products/Everest",
        modelCategory: "performance",
        media: {
          path: "/images/product-5.jpg",
          alt: "Everest",
        },
      },
      {
        id: 18,
        badge: null,
        modelName: "Explorer",
        slug: "/products/Explorer",
        modelCategory: "suv",
        media: {
          path: "/images/product-6.jpg",
          alt: "Explorer",
        },
      },
    ],
    categories: [
      { value: "all", label: "All" },
      { value: "sedan", label: "Sedan" },
      { value: "suv", label: "SUV" },
      { value: "truck", label: "Truck" },
      { value: "performance", label: "Performance" },
      { value: "commercial_vehicle", label: "Commercial Vehicle" },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data.heroData} />
      <ProductListSection data={local_data.productData} />
    </>
  );
}
