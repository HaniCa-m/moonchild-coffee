"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  const isRTL = locale === "fa";

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-5 sm:px-8 lg:grid-cols-2">
        {/* Image */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className={isRTL ? "lg:order-2" : ""}
        >
          <div className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-card/60 p-8 backdrop-blur-xl">
            <Image
              src="/images/about/coffee-story.png"
              alt="Coffee Story"
              width={700}
              height={850}
              className="transition duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{
            opacity: 0,
            x: isRTL ? 40 : -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {t("eyebrow")}
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
            <span className="block">
              {t("titleLine1")}
            </span>

            <span className="mt-3 block">
              {t("titleLine2")}
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-muted-foreground">
            {t("description")}
          </p>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              {
                value: "250+",
                label: t("stats.beans"),
              },
              {
                value: "18",
                label: t("stats.drinks"),
              },
              {
                value: "4.9★",
                label: t("stats.rating"),
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
              >
                <h3 className="font-heading text-3xl font-bold text-primary">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-105"
          >
            {t("button")}

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}