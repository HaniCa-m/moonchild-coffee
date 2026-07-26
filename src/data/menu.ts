export type MenuCategory =
  | "coffee"
  | "cold"
  | "dessert";


export type MenuItem = {
  id: string;
  category: MenuCategory;
  image: string;
  price: number;
  rating: number;
  featured?: boolean;
  badge?: string;
  imageClass?: string;
  hoverClass?: string;
};


export const menuItems: MenuItem[] = [

  // Coffee

  {
    id: "espresso",
    category: "coffee",
    image: "/images/menu/espresso.png",
    price: 4.5,
    rating: 4.9,
    featured: true,
    badge: "Signature",
  },

  {
    id: "americano",
    category: "coffee",
    image: "/images/menu/americano.png",
    price: 4,
    rating: 4.8,
    
  },

  {
    id: "mocha",
    category: "coffee",
    image: "/images/menu/mocha.png",
    price: 6.5,
    rating: 5,
    badge: "Popular",
  },


  // Cold Drinks

  {
    id: "coldbrew",
    category: "cold",
    image: "/images/menu/coldbrew.png",
    price: 5.5,
    rating: 4.9,
    featured: true,
    imageClass: "scale-75",
  },

  {
    id: "icedVanillaLatte",
    category: "cold",
    image: "/images/menu/iced-vanilla-latte.png",
    price: 6,
    rating: 4.8,
    imageClass: "scale-70",
  },


  {
    id: "caramelMacchiato",
    category: "cold",
    image: "/images/menu/caramel-macchiato.png",
    price: 6.5,
    rating: 5,
    badge: "Favorite",
    imageClass: "scale-60",
  },


  {
    id: "strawberryCoffee",
    category: "cold",
    image: "/images/menu/strawberry-coffee.png",
    price: 6.8,
    rating: 4.9,
    imageClass: "scale-57",
  },


  // Desserts

  {
    id: "chocolateCake",
    category: "dessert",
    image: "/images/menu/chocolate-cake.png",
    price: 7,
    rating: 4.9,
    badge: "Chef Choice",
    imageClass: "scale-70",
  },


  {
    id: "blueberryCheesecake",
    category: "dessert",
    image: "/images/menu/blueberry-cheesecake.png",
    price: 7.5,
    rating: 5,
    imageClass: "scale-70",
  },


  {
    id: "croissant",
    category: "dessert",
    image: "/images/menu/croissant.png",
    price: 4.5,
    rating: 4.8,
    imageClass: "scale-70",
  },


  {
    id: "tiramisu",
    category: "dessert",
    image: "/images/menu/tiramisu.png",
    price: 8,
    rating: 5,
    featured:true,
    imageClass: "scale-70",
  }

];