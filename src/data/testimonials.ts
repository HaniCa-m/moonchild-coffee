export type Testimonial = {
  id: string;
  image: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "emma",
    image: "/images/testimonials/emma.jpg",
    rating: 5,
  },
  {
    id: "daniel",
    image: "/images/testimonials/daniel.jpg",
    rating: 5,
  },
  {
    id: "olivia",
    image: "/images/testimonials/olivia.jpg",
    rating: 5,
  },
];