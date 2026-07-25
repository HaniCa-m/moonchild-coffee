"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const images = [
  {
    src: "/images/gallery/interior.jpg",
    key: "interior",
    size: "lg",
  },
  {
    src: "/images/gallery/barista.jpg",
    key: "barista",
    size: "sm",
  },
  {
    src: "/images/gallery/latte-art.jpg",
    key: "latteArt",
    size: "sm",
  },
  {
    src: "/images/gallery/beans.jpg",
    key: "beans",
    size: "sm",
  },
  {
    src: "/images/gallery/dessert.jpg",
    key: "dessert",
    size: "sm",
  },
  {
  src: "/images/gallery/coffee-bar.jpg",
    key: "coffeeBar",
    size: "sm",
  },
];

export default function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section className="relative overflow-hidden py-32">
      {/* background glow */}
      <div
        className="
        absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_top,rgba(201,154,84,.12),transparent_60%)]
      "
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p
            className="
            mb-4
            text-sm
            font-semibold
            uppercase
            tracking-[0.4em]
            text-primary
          "
          >
            {t("eyebrow")}
          </p>

          <h2
            className="
            font-heading
            text-4xl
            font-bold
            text-foreground
            sm:text-5xl
          "
          >
            {t("title")}
          </h2>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-muted-foreground
          "
          >
            {t("description")}
          </p>
        </motion.div>

        {/* Gallery */}

        <div
          className="
          grid
          gap-6
          md:grid-cols-3
          "
        >
          {images.map((image, index) => (
            <motion.article
              key={image.key}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[32px]
                ${image.size === "lg" ? "md:col-span-2 md:row-span-2" : ""}

                ${image.size === "wide" ? "md:col-span-2" : ""}

                aspect-[3/2]
              `}
            >
              <Image
                src={image.src}
                alt={t(`items.${image.key}`)}
                fill
                sizes="
                (max-width:768px)100vw,
                50vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* dark cinematic overlay */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                opacity-70
                transition
                duration-500
                group-hover:opacity-90
                "
              />

              {/* title */}

              <div
                className="
                absolute
                bottom-0
                left-0
                right-0
                p-8
                translate-y-4
                opacity-0
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
                "
              >
                <h3
                  className="
                  text-xl
                  font-semibold
                  text-white
                  "
                >
                  {t(`items.${image.key}`)}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
