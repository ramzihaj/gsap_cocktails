const navLinks = [
    {
        id: "menu",
        title: "Menu",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "gallery",
        title: "Our Space",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const coffeeLists = [
    {
        name: "Café Arabe",
        country: "TN",
        detail: "Espresso style",
        price: "4.5 DT",
    },
    {
        name: "Café Noir",
        country: "TN",
        detail: "Black coffee",
        price: "3.8 DT",
    },
    {
        name: "Café au Lait",
        country: "FR/TN",
        detail: "With milk",
        price: "5.2 DT",
    },
    {
        name: "Espresso Doppio",
        country: "IT/TN",
        detail: "Double shot",
        price: "4.8 DT",
    },
];

const teaLists = [
    {
        name: "Thé à la Menthe",
        country: "TN",
        detail: "Fresh mint tea",
        price: "3.5 DT",
    },
    {
        name: "Thé à la Jasmin",
        country: "TN",
        detail: "Jasmine infused",
        price: "4.2 DT",
    },
    {
        name: "Thé Vert Marocain",
        country: "MA/TN",
        detail: "Green tea blend",
        price: "4.0 DT",
    },
    {
        name: "Thé Noir à la Menthe",
        country: "TN",
        detail: "Black mint tea",
        price: "3.9 DT",
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Authentic Tunisian blends",
    "Freshly brewed daily",
    "Cozy atmosphere",
    "Traditional pastries paired",
];

const goodLists = [
    "Locally sourced ingredients",
    "Expert barista techniques",
    "Cultural hospitality",
    "Handcrafted with care",
];

const storeInfo = {
    heading: "Where to Find Us",
    address: "Avenue Habib Bourguiba, Tunis, Tunisie",

    contact: {
        phone: "(216) 71 123 456",
        email: "contact@cafetunisien.tn",
    },
};

const openingHours = [
    { day: "Mon–Fri", time: "07:00am – 10pm" },
    { day: "Sat", time: "08:00am – 11pm" },
    { day: "Sun", time: "09:00am – 9pm" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const allDrinks = [
    {
        id: 1,
        name: "Thé à la Menthe Classique",
        image: "/images/drink1.png",
        title: "Refreshing Tunisian Tradition",
        description:
            "Served in a traditional glass with fresh mint leaves and a touch of sugar, this iconic tea is the perfect companion for a relaxing afternoon in Tunis.",
    },
    {
        id: 2,
        name: "Café Arabe Fort",
        image: "/images/drink2.png",
        title: "Bold and Aromatic",
        description:
            "A strong, cardamom-spiced coffee brewed to perfection, evoking the bustling souks of Tunisia. Ideal for starting your day with energy.",
    },
    {
        id: 3,
        name: "Thé Jasmin Frais",
        image: "/images/drink3.png",
        title: "Floral Elegance",
        description:
            "Delicate jasmine petals steeped in hot water, offering a subtle sweetness and calming aroma. Paired beautifully with makroud pastries.",
    },
    {
        id: 4,
        name: "Café au Lait Tunisien",
        image: "/images/drink4.png",
        title: "Creamy Comfort",
        description:
            "Freshly steamed milk blended with robust Tunisian coffee, topped with a sprinkle of cinnamon. A cozy hug in every sip.",
    },
];

export {
    navLinks,
    coffeeLists,
    teaLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allDrinks,
};
