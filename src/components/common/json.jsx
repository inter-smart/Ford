const product_page = {
  heroData: {
    title: string,
    description: null,
    media: {
      type: (image, video),
      desktop: {
        path: string,
        alt: string,
      },
      mobile: {
        path: string,
        alt: string,
      },
    },
    button: null,
  },
  product: [
    {
      id: 1,
      badge: string,
      modelName: "taurus",
      slug: string,
      modelCategory: (sedan, suv, truck, performance, commercial_vehicle),
      media: {
        type: (image, video),
        path: string,
        alt: string,
      },
    },
  ],
};

const product_detil_page = {
  heroData: {
    title: "mustang",
    description: "<p>Confidence On Every Drive</p>",
    media: {
      type: (image, video),
      desktop: {
        path: string,
        alt: string,
      },
      mobile: {
        path: string,
        alt: string,
      },
    },
    button: {
      type: "link",
      isExternal: false,
      label: "Enquire Now",
      link: "/",
    },
  },
  aboutVehicle: {
    badge: string,
    title: string,
    description: string,
    media: {
      type: (image, video),
      path: string,
      alt: string,
    },
    button: {
      type: "link",
      isExternal: false,
      label: "Book a Test Drive",
      link: "/",
    },
  },
  vehicleDetail: {
    year: 2024,
    modelCode: "gt-5.0",
    modelName: "mustang",
    badge: string,
    keyFeatureTitle: string,
    keyFeatureDescription: string,
    modelCategory: (sedan, suv, truck, performance, commercial_vehicle),
    media: {
      type: (image, video),
      path: string,
      alt: string,
    },
    specification: {
      engine: {
        type: 5.0,
        unit: "L V8",
        title: "engine",
      },
      horsepower: {
        value: 460,
        unit: "HP",
        title: "power",
      },
      torque: {
        value: 569,
        unit: "NM",
        title: "torque",
      },
    },
    interior: {
      media: {
        type: (image, video),
        path: string,
        alt: string,
      },
      title: "Interior",
      description: string,
      highlight: [
        {
          id: 1,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "Selectable Electric Power-assisted",
        },
        {
          id: 2,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "SYNC®3",
        },
        {
          id: 3,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "Track Apps®",
        },
        {
          id: 5,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "12-inch Lcd Digital Instrument Cluster With Mycolor®",
        },
      ],
      gallery: [
        {
          id: 1,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 2,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
      ],
    },
    exterior: {
      media: {
        type: (image, video),
        path: string,
        alt: string,
      },
      title: "Exterior",
      description: string,
      highlight: [
        {
          id: 1,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "Torque About Town",
        },
        {
          id: 2,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "5.0L V8",
        },
        {
          id: 3,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "Dual Exhaust and Active Valve Performance Exhaust",
        },
        {
          id: 5,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "Launch Control and Electronic Line-lock",
        },
        {
          id: 6,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "Led Front Lighting",
        },
        {
          id: 7,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
          title: "Make It Colorfully Personal",
        },
      ],
      gallery: [
        {
          id: 1,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 2,
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
      ],
    },
    color_switch: {
      car_name: string,
      colorOption: [
        {
          id: 1,
          name: "Shadow Black",
          hexCode: "#1a1a1a",
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 2,
          name: "Oxford White",
          hexCode: "#f5f5f5",
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 3,
          name: "Race Red",
          hexCode: "#cc0000",
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 4,
          name: "Grabber Blue",
          hexCode: "#4a90e2",
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 5,
          name: "Dark Matter Gray",
          hexCode: "#4a4a4a",
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 6,
          name: "Deep Impact Blue",
          hexCode: "#1e3a8a",
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 7,
          name: "Velocity Blue",
          hexCode: "#0066cc",
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
        {
          id: 8,
          name: "Orange Fury",
          hexCode: "#ff6600",
          media: {
            type: (image, video),
            path: string,
            alt: string,
          },
        },
      ],
    },
  },
  gallery_section: {
    title: string,
    interior: [
      {
        id: 1,
        media: {
          type: (image, video),
          path: string,
          alt: string,
        },
      },
      {
        id: 2,
        media: {
          type: (image, video),
          path: string,
          alt: string,
        },
      },
      {
        id: 3,
        media: {
          type: (image, video),
          path: string,
          alt: string,
        },
      },
    ],
    exterior: [
      {
        id: 1,
        media: {
          type: (image, video),
          path: string,
          alt: string,
        },
      },
      {
        id: 2,
        media: {
          type: (image, video),
          path: string,
          alt: string,
        },
      },
      {
        id: 3,
        media: {
          type: (image, video),
          path: string,
          alt: string,
        },
      },
    ],
  },
  afterSale: {
    title: string,
    description: string,
    media: {
      type: (image, video),
      path: string,
      alt: string,
    },
    button: {
      type: "link",
      isExternal: false,
      label: "Explore After Sales Service",
      link: "/",
    },
  },
};

const contact_page = {
  offices: {
    headOffice: {
      title: "Head Office",
      address: [
        "Office 1002, A-block, Centurion Star Tower, behind Day To Day,",
        "Port Saeed 3A St. Deira,",
        "Dubai, United Arab Emirates.",
        "PO Box: 22637",
      ],
      phone: "97143200021",
      email: "info@shayan.ae",
    },
    corporateOffice: {
      title: "Corporate Office",
      address: [
        "SAIF Office Q1-08-125/A,",
        "P.O.Box 22637,",
        "Sharjah - U.A.E",
      ],
      phone: "+971 4 272 8150",
      email: "auto@shayan.ae",
    },
  },
  media: {
    type: (image, video),
    path: string,
    alt: string,
  },
  branches: [
    {
      title: "Seeb",
      address: "Seeb Al Mawaleh, Near Carrefour, Seeb",
      phone: "26887635",
      time: "10 am to 6 pm",
      button: {
        type: "link",
        isExternal: false,
        label: "Explore After Sales Service",
        link: "/",
      },
    },
    {
      title: "Seeb",
      address: "Seeb Al Mawaleh, Near Carrefour, Seeb",
      phone: "26887635",
      time: "10 am to 6 pm",
      button: {
        type: "link",
        isExternal: false,
        label: "Explore After Sales Service",
        link: "/",
      },
    },
    {
      title: "Seeb",
      address: "Seeb Al Mawaleh, Near Carrefour, Seeb",
      phone: "26887635",
      time: "10 am to 6 pm",
      button: {
        type: "link",
        isExternal: false,
        label: "Explore After Sales Service",
        link: "/",
      },
    },
    {
      title: "Seeb",
      address: "Seeb Al Mawaleh, Near Carrefour, Seeb",
      phone: "26887635",
      time: "10 am to 6 pm",
      button: {
        type: "link",
        isExternal: false,
        label: "Explore After Sales Service",
        link: "/",
      },
    },
    {
      title: "Seeb",
      address: "Seeb Al Mawaleh, Near Carrefour, Seeb",
      phone: "26887635",
      time: "10 am to 6 pm",
      button: {
        type: "link",
        isExternal: false,
        label: "Explore After Sales Service",
        link: "/",
      },
    },
  ],
};
