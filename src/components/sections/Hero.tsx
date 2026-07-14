"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const { resolvedTheme } = useTheme();

  const isRTL = locale === "fa";
  const isDark = resolvedTheme === "dark";

  const image = isDark ? "/images/Hot Coffee.png" : "/images/Ice Latte.png";

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Moonchild Coffee"
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-all duration-700 ${
            isRTL ? "scale-x-[-1]" : ""
          }`}
        />

        <div
          className={`absolute inset-0 ${
            isDark ? "bg-black/30" : "bg-white/30"
          }`}
        />

        <div
          className={`absolute inset-0 ${
            isRTL
              ? "bg-gradient-to-l from-background via-background/70 to-transparent"
              : "bg-gradient-to-r from-background via-background/70 to-transparent"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{
            opacity: 0,
            x: isRTL ? 40 : -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.5em] text-primary sm:text-sm">
            {t("eyebrow")}
          </p>

          <h1
            className={`font-heading font-bold text-5xl text-foreground sm:text-6xl lg:text-7xl ${
              isRTL ? "leading-[1.45]" : "leading-[1.05] tracking-[-0.04em]"
            }`}
          >
            <span className="block">{t("titleLine1")}</span>
            <span className="mt-2 block">{t("titleLine2")}</span>
          </h1>

          <p
            className={`mt-8 max-w-xl text-lg text-foreground/80 ${
              isRTL ? "leading-10" : "leading-9"
            }`}
          >
            <span className="block">{t("descriptionLine1")}</span>
            <span className="block">{t("descriptionLine2")}</span>
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t("menuButton")}
            </Link>

            <Link
              href="/reservation"
              className="rounded-full border border-border bg-background/20 px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-background/40 hover:text-primary"
            >
              {t("reserveButton")}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
      </motion.div>
    </section>
  );
}
