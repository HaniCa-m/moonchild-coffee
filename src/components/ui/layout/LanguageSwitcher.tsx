"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";

function isLocale(value: string): value is (typeof routing.locales)[number] {
  return routing.locales.includes(
    value as (typeof routing.locales)[number]
  );
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: string) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      const segments = pathname.split("/").filter(Boolean);

      if (isLocale(segments[0])) {
        segments.shift();
      }

      const newPath =
        `/${nextLocale}` +
        (segments.length ? `/${segments.join("/")}` : "");

      router.replace(newPath, { scroll: false });
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-background/80 p-1 backdrop-blur-md shrink-0 w-fit">
      {routing.locales.map((l) => {
        const active = l === locale;

        return (
          <button
            key={l}
            onClick={() => switchLocale(l)}
            disabled={isPending}
            aria-pressed={active}
            className="relative px-3 py-1 text-xs font-medium transition-all duration-300 disabled:opacity-50"
          >
            <span
              className={`
                absolute inset-0 rounded-full bg-accent transition-all duration-300
                ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
            />

            <span
              className={`
                relative z-10 transition-colors duration-300
                ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {l.toUpperCase()}
            </span>
          </button>
        );
      })}
    </div>
  );
}