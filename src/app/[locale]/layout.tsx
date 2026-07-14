import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import ThemeProvider from "@/components/ui/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moonchild Coffee",
  description: "Premium coffee shop experience",
};

const locales = ["en", "fa"];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const currentLocale = locales.includes(locale)
    ? locale
    : "en";

  setRequestLocale(currentLocale);

  const messages = await getMessages();

  return (
    <html
      lang={currentLocale}
      dir={currentLocale === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${vazirmatn.variable}
      `}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <NextIntlClientProvider
          locale={currentLocale}
          messages={messages}
        >
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}