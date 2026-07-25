"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CoffeeCard from "./CoffeeCard";
import { featuredCoffee } from "@/data/featured-coffee";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function FeaturedCoffee() {
  const t = useTranslations("featuredCoffee");

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(201,154,84,.08),transparent_60%)]" />

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

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredCoffee.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
              }}
            >
              <CoffeeCard
                image={coffee.image}
                title={t(`items.${coffee.id}.name`)}
                description={t(`items.${coffee.id}.description`)}
                price={coffee.price.toString()}
                button={t("button")}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/menu"
            className="group flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-105"
          >
            {t("viewAll")}

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}