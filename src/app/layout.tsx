import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tahmid Sikder Rifat — CSE Student & Developer",
  description:
    "Tahmid Sikder Rifat — Computer Science & Engineering student passionate about web development, cyber security, and modern technology.",
  keywords: [
    "Tahmid Sikder Rifat",
    "CSE Student",
    "Web Development",
    "Cyber Security",
    "WordPress",
    "Linux Mint",
    "Sylhet",
    "Bangladesh",
  ],
  authors: [{ name: "Tahmid Sikder Rifat" }],
  openGraph: {
    title: "Tahmid Sikder Rifat — CSE Student & Developer",
    description:
      "Computer Science & Engineering student passionate about web development, cyber security, and modern technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahmid Sikder Rifat — CSE Student & Developer",
    description:
      "Computer Science & Engineering student passionate about web development, cyber security, and modern technology.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} antialiased bg-ink text-bone font-body selection:bg-ember selection:text-ink`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
