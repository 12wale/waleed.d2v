import type { Metadata } from "next";
import { Alexandria, Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import logo from "@/public/logo.png";
const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "وليد رفعت | مطور ويب وحلول برمجية",
  description:
    "أصنع تجارب رقمية جميلة وتفاعلية لا تُنسى مع تركيز قوي على الأداء وتجربة المستخدم.",
    icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${alexandria.variable} ${cairo.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
