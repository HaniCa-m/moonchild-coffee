"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

import { menuItems } from "@/data/menu";

export default function Menu() {
  const t = useTranslations("menu");

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(201,154,84,.12),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {t("eyebrow")}
          </p>

          <h1 className="font-heading text-4xl font-bold sm:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_70px_rgba(201,154,84,.18)]"
            >
              {item.badge && (
                <div className="absolute left-5 top-5 z-10 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  {t(`badges.${item.badge}`)}
                </div>
              )}

              <div className="relative flex h-80 items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={t(`items.${item.id}.name`)}
                  width={400}
                  height={400}
                  draggable={false}
             className={`
  select-none
  transition
  duration-700
  ${item.imageClass ?? ""}
  ${
    item.imageClass
      ? "group-hover:scale-[0.85]"
      : "group-hover:scale-110"
  }
`}
                />
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-heading text-2xl font-semibold">
                    {t(`items.${item.id}.name`)}
                  </h2>

                  <div className="flex items-center gap-1 text-primary">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                <p className="mt-4 min-h-20 text-sm leading-7 text-muted-foreground">
                  {t(`items.${item.id}.description`)}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
                  <span className="text-3xl font-bold text-primary">
                    ${item.price.toFixed(2)}
                  </span>

                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t(`categories.${item.category}`)}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}