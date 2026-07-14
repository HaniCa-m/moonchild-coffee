"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { key: "home", href: "/" },
  { key: "menu", href: "/menu" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function MobileMenu() {
  const t = useTranslations("navigation");
  const brand = useTranslations("brand");
  const actions = useTranslations("actions");
  const { theme, setTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger className="rounded-full border p-2">
        <Menu size={22} />
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px]">
        <div className="flex h-full flex-col px-6">
          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Moonchild Coffee"
              width={45}
              height={45}
              className="h-11 w-11 object-contain"
            />

            <span className="font-serif text-lg font-semibold">
              {brand("name")}
            </span>
          </div>

          <nav className="mt-10 flex flex-col gap-5">
            {links.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-lg font-medium transition hover:text-primary"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-6 pb-6">
            <div className="border-t pt-6">
              <div className="flex items-center justify-between">
                <LanguageSwitcher />

                <button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                  className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={16} />
                      {actions("light")}
                    </>
                  ) : (
                    <>
                      <Moon size={16} />
                      {actions("dark")}
                    </>
                  )}
                </button>
              </div>
            </div>

            <Link
              href="/reservation"
              className="block rounded-full bg-primary px-5 py-3 text-center text-primary-foreground transition hover:opacity-90"
            >
              {actions("bookTable")}
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}