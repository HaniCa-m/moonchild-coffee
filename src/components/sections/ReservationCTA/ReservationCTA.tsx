"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function ReservationCTA() {
  const t = useTranslations("reservation");

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute left-1/2 top-0 -z-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          whileHover={{ y: -6 }}
          className="
            overflow-hidden
            rounded-[36px]
            border
            border-border/60
            bg-card/70
            backdrop-blur-2xl
            shadow-[0_25px_80px_rgba(0,0,0,.12)]
        "
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* Left */}

            <div className="p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <CalendarDays size={16} />
                {t("eyebrow")}
              </div>

              <h2 className="mt-8 font-heading text-4xl font-bold leading-tight sm:text-5xl">
                <span className="block">
                  {t("titleLine1")}
                </span>

                <span className="mt-2 block text-primary">
                  {t("titleLine2")}
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                {t("description")}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/reservation"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-105"
                >
                  {t("button")}

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/menu"
                  className="rounded-full border border-border bg-background/60 px-8 py-4 font-semibold backdrop-blur transition hover:border-primary hover:text-primary"
                >
                  {t("secondaryButton")}
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="relative h-[340px] lg:h-[620px]">
              <Image
                src="/images/reservation/reservation-bg1.jpg"
                alt="Moonchild Coffee"
                fill
                sizes="50vw"
                className="
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}