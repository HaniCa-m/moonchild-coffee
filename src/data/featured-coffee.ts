export type CoffeeItem = {
  id: string;
  image: string;
  price: number;
};

export const featuredCoffee: CoffeeItem[] = [
  {
    id: "espresso",
    image: "/images/coffee/espresso.png",
    price: 4.5,
  },
  {
    id: "latte",
    image: "/images/coffee/latte.png",
    price: 6.5,
  },
  {
    id: "cappuccino",
    image: "/images/coffee/cappuccino.png",
    price: 5.5,
  },
];