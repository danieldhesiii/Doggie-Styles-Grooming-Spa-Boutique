/**
 * All editable business content lives in this one file.
 * Change a value here and it updates everywhere on the site.
 */

export const site = {
  name: "Doggie Styles",
  fullName: "Doggie Styles Grooming Spa & Boutique",
  phoneDisplay: "07864 359871",
  phoneHref: "tel:+447864359871",
  email: "Doggiestylesgroomingspa@gmail.com",
  bookingUrl:
    "https://portal.shakeyourtail.com/#/public/home?siteId=ac467108-ee4d-4f55-80be-4c7e464223da",
  instagram: "https://www.instagram.com/doggie_styles_spa/",
  instagramHandle: "@doggie_styles_spa",
  facebook: "https://www.facebook.com/profile.php?id=61552769124002",
  address: {
    line1: "Unit 18, Alpha Garden Centre",
    line2: "London Road, Wickford",
    postcode: "SS12 0JX",
  },
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Doggie+Styles+Grooming+Spa+%26+Boutique+Alpha+Garden+Centre+Wickford+SS12+0JX",
  // Swap for the salon's own Google review short link (g.page/r/...) when they share it.
  reviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Doggie+Styles+Grooming+Spa+%26+Boutique+Alpha+Garden+Centre+Wickford+SS12+0JX",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Doggie%20Styles%20Grooming%20Spa%20%26%20Boutique%20Alpha%20Garden%20Centre%20Wickford%20SS12%200JX&output=embed",
  rating: { score: "5.0", count: 32 },
  hours: [
    { days: "Monday", time: "Closed" },
    { days: "Tuesday to Friday", time: "9:00am to 5:00pm" },
    { days: "Saturday", time: "9:00am to 5:00pm" },
    { days: "Sunday", time: "Closed" },
  ],
  /**
   * Optional live Instagram feed. Connect the salon's Instagram to a feed
   * service such as Behold (behold.so, free tier) and paste the JSON feed URL
   * here. New posts will then appear in the gallery automatically. Until
   * then, the bundled photos below are shown.
   */
  instagramFeedUrl: "",
};

export type Service = {
  name: string;
  description: string;
  /** Leave null to show nothing; set e.g. "from £35" once prices confirmed. */
  price: string | null;
};

export type ServiceCategory = {
  id: string;
  label: string;
  intro: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "full-groom",
    label: "Full Groom",
    intro: "The complete spa day, from bath to bow.",
    services: [
      {
        name: "Signature full groom",
        description:
          "Warm bath with coat-appropriate shampoo, conditioning, fluff dry, styled clip, nail trim, ear clean and a finishing spritz.",
        price: null,
      },
      {
        name: "Breed standard trim",
        description:
          "Traditional styling for your breed, or bring a photo of the look you love and we will work to it.",
        price: null,
      },
      {
        name: "Restyle & coat reset",
        description:
          "For coats that have grown out or matted. We will always talk you through the kindest option first.",
        price: null,
      },
    ],
  },
  {
    id: "bath-tidy",
    label: "Bath & Tidy",
    intro: "Freshen up between full grooms.",
    services: [
      {
        name: "Bath, brush & blow dry",
        description:
          "Warm bath, deep conditioning and a full blow dry with a thorough brush-out from nose to tail.",
        price: null,
      },
      {
        name: "Wash & tidy",
        description:
          "Everything above, plus a light tidy around the face, feet and feathering to keep them looking sharp.",
        price: null,
      },
    ],
  },
  {
    id: "puppy",
    label: "Puppy's First Groom",
    intro: "Gentle introductions, at their pace.",
    services: [
      {
        name: "Puppy introduction session",
        description:
          "A calm first visit with a bath, light tidy, nail trim and plenty of breaks, treats and reassurance.",
        price: null,
      },
      {
        name: "Confidence building visits",
        description:
          "Short follow-up sessions so the salon, the dryer and the table all become familiar friends.",
        price: null,
      },
    ],
  },
  {
    id: "hand-stripping",
    label: "Hand Stripping",
    intro: "Proper coat care for wire-coated breeds.",
    services: [
      {
        name: "Full hand strip",
        description:
          "Traditional hand stripping that keeps the coat's true texture and colour, done patiently and kindly.",
        price: null,
      },
      {
        name: "Rolling coat maintenance",
        description:
          "Regular lighter strips through the year to keep a rolled coat healthy, tidy and comfortable.",
        price: null,
      },
    ],
  },
  {
    id: "spa-extras",
    label: "Spa & Extras",
    intro: "Little extras that make a big difference.",
    services: [
      {
        name: "Emmi-pet teeth cleaning",
        description:
          "Silent, brush-free ultrasonic teeth cleaning. Gentle enough for nervous dogs and brilliant for fresh breath.",
        price: null,
      },
      {
        name: "Nail trim & paw care",
        description: "Nails clipped and filed, pads checked and tidied.",
        price: null,
      },
      {
        name: "De-shedding treatment",
        description:
          "A deep de-shed bath and blow-out that seriously cuts down the fur on your sofa.",
        price: null,
      },
      {
        name: "Local pick up & drop off",
        description:
          "No car, no problem. We collect and return dogs locally around Wickford by arrangement.",
        price: null,
      },
    ],
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  href: string;
  /** Set true for the one large tile in the grid. */
  featured?: boolean;
};

const post = (shortcode: string) => `https://www.instagram.com/p/${shortcode}/`;

export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/ig-02.jpg",
    alt: "Freshly groomed dog at Doggie Styles in Wickford",
    href: post("DaUidZfoycU"),
    featured: true,
  },
  {
    src: "/gallery/ig-03.jpg",
    alt: "Rory the toy poodle, freshly groomed and extra fluffy",
    href: post("DaMxF71o_L1"),
  },
  {
    src: "/gallery/ig-04.jpg",
    alt: "Mr Oakley the shih tzu after his fresh summer groom",
    href: post("DZxx5oDoF1Y"),
  },
  {
    src: "/gallery/ig-05.jpg",
    alt: "Winnie looking holiday ready after her trim",
    href: post("DZmVPtWo6F6"),
  },
  {
    src: "/gallery/ig-06.jpg",
    alt: "Nala the sheltie, freshly groomed and summer ready",
    href: post("DZg77ZlIjzX"),
  },
  {
    src: "/gallery/ig-07.jpg",
    alt: "Trevor the Lakeland terrier after his first hand strip",
    href: post("DY2vJu_oEIc"),
  },
  {
    src: "/gallery/ig-08.jpg",
    alt: "Lady the working cocker spaniel after her pamper session",
    href: post("DYeIH3YIrxw"),
  },
  {
    src: "/gallery/ig-10.jpg",
    alt: "A clean and tidy dog ready for summer",
    href: post("DYKrYwQiJdh"),
  },
  {
    src: "/gallery/ig-12.jpg",
    alt: "Brother and sister dogs groomed together",
    href: post("DXOMuCBiGsh"),
  },
];

export type Review = {
  name: string;
  source: string;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Hermione Pike",
    source: "Google review",
    quote: "Great service, friendly staff, best groomers I've ever been to.",
  },
  {
    name: "Umar Malik",
    source: "Google review",
    quote:
      "Listened to me and my requests and discussed all options and solutions with me.",
  },
  {
    name: "Jennie",
    source: "Google review",
    quote: "Good location with lots of free parking, I love this place.",
  },
];
