"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Coffee,
  Sparkles,
  Heart,
  Award,
} from "lucide-react";

const values = [
  {
    key: "quality",
    icon: Coffee,
  },
  {
    key: "craft",
    icon: Sparkles,
  },
  {
    key: "passion",
    icon: Heart,
  },
  {
    key: "experience",
    icon: Award,
  },
];

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(201,154,84,.12),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">


        {/* Hero */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {t("eyebrow")}
          </p>


          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-6xl">
            {t("title")}
          </h1>


          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>

        </motion.div>



        {/* Story */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">


          <motion.article
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
            rounded-[32px]
            border
            border-border/60
            bg-card/70
            p-8
            backdrop-blur-xl
            sm:p-12
            "
          >

            <h2 className="font-heading text-3xl font-bold">
              {t("story.title")}
            </h2>


            <p className="mt-6 leading-8 text-muted-foreground">
              {t("story.description")}
            </p>

          </motion.article>



          <motion.article
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
            rounded-[32px]
            border
            border-primary/20
            bg-primary/5
            p-8
            sm:p-12
            "
          >

            <h2 className="font-heading text-3xl font-bold">
              {t("philosophy.title")}
            </h2>


            <p className="mt-6 leading-8 text-muted-foreground">
              {t("philosophy.description")}
            </p>

          </motion.article>


        </div>



        {/* Values */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((item,index)=>{

            const Icon = item.icon;

            return (
              <motion.div
                key={item.key}
                initial={{
                  opacity:0,
                  y:30,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index * 0.1,
                }}
                className="
                rounded-[28px]
                border
                border-border/60
                bg-card/70
                p-7
                text-center
                backdrop-blur-xl
                "
              >

                <Icon
                  size={32}
                  className="mx-auto text-primary"
                />


                <h3 className="mt-5 font-heading text-xl font-semibold">
                  {t(`values.${item.key}.title`)}
                </h3>


                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {t(`values.${item.key}.description`)}
                </p>


              </motion.div>
            );

          })}

        </div>


      </div>

    </section>
  );
}