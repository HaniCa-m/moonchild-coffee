"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Clock3, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  const links = [
    {
      label: t("links.home"),
      href: "/",
    },
    {
      label: t("links.menu"),
      href: "/menu",
    },
    {
      label: t("links.about"),
      href: "/about",
    },
    {
      label: t("links.contact"),
      href: "/contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(201,154,84,.08),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr_.8fr_.9fr]">
          {/* Brand */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Moonchild Coffee"
                width={62}
                height={62}
              />

              <div>
                <h3 className="font-heading text-2xl font-bold">Moonchild</h3>

                <p className="text-sm uppercase tracking-[0.35em] text-primary">
                  Coffee House
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-8 text-muted-foreground">
              {t("description")}
            </p>
          </motion.div>

          {/* Links */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
          >
            <h4 className="mb-6 font-heading text-xl font-semibold">
              {t("explore")}
            </h4>

            <nav className="space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    block
                    text-muted-foreground
                    transition
                    hover:text-primary
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Hours */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            <h4 className="mb-6 font-heading text-xl font-semibold">
              {t("hours")}
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Clock3 size={18} className="mt-1 text-primary" />

                <div>
                  <p className="font-medium">{t("weekdays")}</p>

                  <p className="text-sm text-muted-foreground">08:00 — 22:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 size={18} className="mt-1 text-primary" />

                <div>
                  <p className="font-medium">{t("weekend")}</p>

                  <p className="text-sm text-muted-foreground">09:00 — 23:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            <h4 className="mb-6 font-heading text-xl font-semibold">
              {t("contact")}
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary" />

                <p className="text-muted-foreground">Paris, France</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-primary" />

                <p className="text-muted-foreground">hello@moonchild.coffee</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="my-10 h-px bg-border/60" />

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-4
            text-center
            text-sm
            text-muted-foreground
            md:flex-row
            md:justify-between
            md:text-start
          "
        >
          <p>{t("copyright")}</p>

          <p>{t("crafted")}</p>
        </div>
      </div>
    </footer>
  );
}
