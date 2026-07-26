"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function Reservation() {
  const t = useTranslations("reservation1");

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(201,154,84,.12),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
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

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
          <div className="grid lg:grid-cols-2">
            {/* Image */}

            <div className="relative min-h-105">
              <Image
                src="/images/reservation/reservation-page-bg.jpg"
                alt="Moonchild Coffee Reservation"
                fill
                sizes="50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-background/40 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-black/20 p-6 text-white backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Clock3 size={20} className="text-primary" />

                  <div>
                    <p className="font-semibold">{t("hours.title")}</p>

                    <p className="text-sm text-white/70">
                      {t("hours.weekdays")}
                    </p>

                    <p className="text-sm text-white/70">
                      {t("hours.weekend")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}

            <div className="p-8 sm:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <CheckCircle2 size={56} className="mb-6 text-primary" />

                  <h2 className="font-heading text-3xl font-bold">
                    {t("success.title")}
                  </h2>

                  <p className="mt-4 text-muted-foreground">
                    {t("success.description")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      required
                      placeholder={t("fields.name")}
                      className="rounded-2xl border border-border bg-background/60 px-5 py-3 outline-none transition focus:border-primary"
                    />

                    <input
                      required
                      type="email"
                      placeholder={t("fields.email")}
                      className="rounded-2xl border border-border bg-background/60 px-5 py-3 outline-none transition focus:border-primary"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      placeholder={t("fields.phone")}
                      className="rounded-2xl border border-border bg-background/60 px-5 py-3 outline-none transition focus:border-primary"
                    />

                    <select className="rounded-2xl border border-border bg-background/60 px-5 py-3 outline-none transition focus:border-primary">
                      <option>{t("fields.guests")}</option>

                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      type="date"
                      className="rounded-2xl border border-border bg-background/60 px-5 py-3 outline-none transition focus:border-primary"
                    />

                    <input
                      type="time"
                      className="rounded-2xl border border-border bg-background/60 px-5 py-3 outline-none transition focus:border-primary"
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder={t("fields.message")}
                    className="w-full rounded-2xl border border-border bg-background/60 px-5 py-3 outline-none transition focus:border-primary"
                  />

                  <button
                    type="submit"
                    className="
                    w-full
                    rounded-full
                    bg-primary
                    py-4
                    font-semibold
                    text-primary-foreground
                    transition
                    hover:scale-[1.02]
                    "
                  >
                    {t("button")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
