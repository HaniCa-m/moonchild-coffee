"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(201,154,84,.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {t("eyebrow")}
          </p>

          <h2 className="font-heading text-4xl font-bold sm:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
              }}
            >
<TestimonialCard
  image={testimonial.image}
  name={t(`items.${testimonial.id}.name`)}
  location={t(`items.${testimonial.id}.location`)}
  review={t(`items.${testimonial.id}.review`)}
  rating={testimonial.rating}
/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}