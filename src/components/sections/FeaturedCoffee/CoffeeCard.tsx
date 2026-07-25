"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

type CoffeeCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  button: string;
};

export default function CoffeeCard({
  image,
  title,
  description,
  price,
  button,
}: CoffeeCardProps) {
  const t = useTranslations("featuredCoffee");

  const locale = useLocale();
  const isRTL = locale === "fa";

  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_70px_rgba(201,154,84,.18)]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div
        className={`absolute top-6 z-20 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground ${
          isRTL ? "right-6" : "left-6"
        }`}
      >
        {t("badge")}
      </div>

      <div className="relative flex h-72 items-center justify-center overflow-hidden">
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: -3,
          }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src={image}
            alt={title}
            width={380}
            height={380}
            draggable={false}
            className="select-none drop-shadow-[0_28px_50px_rgba(0,0,0,.3)]"
          />
        </motion.div>
      </div>

      <div className="space-y-5 px-7 pb-7">
        <div className="flex items-start justify-between mt-2 gap-4">
          <div>
            <h3 className="font-heading text-2xl font-semibold">{title}</h3>

            <div className="mt-2 flex items-center gap-1 text-sm text-primary">
              <Star size={15} fill="currentColor" />
              <span className="font-medium">4.9</span>
            </div>
          </div>

          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Coffee size={20} />
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
          {description}
        </p>

        <div className="flex items-end justify-between border-t border-border/60 pt-5">
          <p className="text-3xl font-bold text-primary">
            ${parseFloat(price).toFixed(2)}
          </p>

          <button className="group/button flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
            {button}

            <ArrowRight
              size={16}
              className="transition-transform group-hover/button:translate-x-1"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
