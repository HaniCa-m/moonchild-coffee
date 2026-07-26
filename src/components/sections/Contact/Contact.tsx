"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactItems = [
  { icon: MapPin, key: "location" },
  { icon: Phone, key: "phone" },
  { icon: Mail, key: "email" },
  { icon: Clock3, key: "hours" },
];

export default function Contact() {
  const t = useTranslations("contactPage");

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(201,154,84,.12),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[.35em] text-primary">
            {t("eyebrow")}
          </p>

          <h1 className="font-heading text-4xl font-bold sm:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>


        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          <div className="grid gap-5 sm:grid-cols-2">
            {contactItems.map((item,index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity:0, y:30 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:index * .1 }}
                  className="
                  rounded-[28px]
                  border
                  border-border/60
                  bg-card/70
                  p-6
                  backdrop-blur-xl"
                >
                  <Icon size={28} className="text-primary" />

                  <h3 className="mt-5 font-heading text-xl font-semibold">
                    {t(`cards.${item.key}.title`)}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {t(`cards.${item.key}.value`)}
                  </p>
                </motion.div>
              );
            })}
          </div>


          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity:0, x:30 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            className="
            rounded-[32px]
            border
            border-border/60
            bg-card/70
            p-8
            backdrop-blur-xl
            sm:p-10"
          >

            <h2 className="font-heading text-3xl font-bold">
              {submitted ? t("form.success") : t("form.title")}
            </h2>


            {submitted ? (
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-primary/10 p-5 text-primary">
                <CheckCircle2 size={24} />
                <span>
                  {t("form.successMessage")}
                </span>
              </div>
            ) : (
              <div className="mt-8 space-y-5">

                <input
                  required
                  name="name"
                  placeholder={t("form.name")}
                  className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-background/50
                  px-5
                  outline-none
                  focus:border-primary"
                />

                <input
                  required
                  type="email"
                  name="email"
                  placeholder={t("form.email")}
                  className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-background/50
                  px-5
                  outline-none
                  focus:border-primary"
                />

                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder={t("form.message")}
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-background/50
                  p-5
                  outline-none
                  focus:border-primary"
                />

                <button
                  type="submit"
                  className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-primary
                  px-8
                  py-4
                  font-semibold
                  text-primary-foreground
                  transition
                  hover:scale-105"
                >
                  {t("form.button")}
                  <Send size={18}/>
                </button>

              </div>
            )}

          </motion.form>

        </div>
      </div>
    </section>
  );
}