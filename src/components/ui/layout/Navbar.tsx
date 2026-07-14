"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const links = [
  { key: "home", href: "/" },
  { key: "menu", href: "/menu" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("navigation");
  const brand = useTranslations("brand");

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 border-b border-border/40 bg-background/80 backdrop-blur-xl" />

      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 md:grid md:grid-cols-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Moonchild Coffee"
            width={45}
            height={45}
            priority
            className="h-10 w-10 object-contain"
          />

          <span className="font-serif text-lg font-semibold tracking-wide sm:text-xl">
            {brand("name")}
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-foreground/80 transition hover:text-primary"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <LanguageSwitcher />

          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="rounded-full border p-2.5 transition hover:border-primary hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}