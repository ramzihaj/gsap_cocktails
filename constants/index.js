const navLinks = [
    {
        id: "cocktails",
        title: "Cocktails",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "work",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const cocktailLists = [
    {
        name: "Chapel Hill Shiraz",
        country: "AU",
        detail: "Battle",
        price: "9.8 DT",
    },
    {
        name: "Caten Malbee",
        country: "AU",
        detail: "Battle",
        price: "14.8 DT",
    },
    {
        name: "Rhino Pale Ale",
        country: "CA",
        detail: "750 ml",
        price: "12 DT",
    },
    {
        name: "Irish Guinness",
        country: "IE",
        detail: "600 ml",
        price: "13.8 DT",
    },
];

const mockTailLists = [
    {
        name: "Tropical Bloom",
        country: "US",
        detail: "Battle",
        price: "12 DT",
    },
    {
        name: "Passionfruit Mint",
        country: "US",
        detail: "Battle",
        price: "19.9 DT",
    },
    {
        name: "Citrus Glow",
        country: "CA",
        detail: "750 ml",
        price: "15.9 DT",
    },
    {
        name: "Lavender Fizz",
        country: "IE",
        detail: "600 ml",
        price: "14.4 DT",
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
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
];

const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
];

const storeInfo = {
    heading: "Where to Find Us",
    address: "Avenue Taieb Mhiri, El Medina, Monastir, Tunisie ",

    contact: {
        phone: "(216) 22 528 882",
        email: "ramzi.hajmassoud.10@gmail.com",
    },
};

const openingHours = [
    { day: "Mon–Fri", time: "09:00am – 11pm" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
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

const allCocktails = [
    {
        id: 1,
        name: "Classic Mojito",
        image: "/images/drink1.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
            "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
        id: 2,
        name: "Raspberry Mojito",
        image: "/images/drink2.png",
        title: "A Zesty Classic That Never Fails",
        description:
            "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
    },
    {
        id: 3,
        name: "Violet Breeze",
        image: "/images/drink3.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
            "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
        id: 4,
        name: "Curacao Mojito",
        image: "/images/drink4.png",
        title: "Crafted With Care, Poured With Love",
        description:
            "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
];

export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
};