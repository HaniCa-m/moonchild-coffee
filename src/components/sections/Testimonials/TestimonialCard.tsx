"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Props = {
  image: string;
  name: string;
  location: string;
  review: string;
  rating: number;
};

export default function TestimonialCard({
  image,
  name,
  location,
  review,
  rating,
}: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_70px_rgba(201,154,84,.18)]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <Quote
          className="mb-6 text-primary/70"
          size={36}
          strokeWidth={1.7}
        />

        <p className="text-base leading-8 text-muted-foreground">
          &quot;{review}&quot;
        </p>

        <div className="mt-8 flex items-center gap-1 text-primary">
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              size={18}
              fill="currentColor"
            />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={58}
            height={58}
            className="rounded-full border border-border object-cover"
          />

          <div>
            <h3 className="font-heading text-lg font-semibold">
              {name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {location}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}