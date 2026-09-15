import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { ThemeProvider } from "./provider";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sejoqariz.vercel.app"),
  title: {
    default: "Sejoqariz | Joseph — Frontend Developer",
    template: "%s | Sejoqariz",
  },
  description:
    "Joseph (Sejoqariz) — Frontend developer building sleek, animated web experiences with Next.js, React, and modern UI.",
  keywords: [
    "Joseph",
    "Sejoqariz",
    "Frontend Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Joseph", url: "https://github.com/Josekariz" }],
  creator: "Joseph",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sejoqariz.vercel.app",
    siteName: "Sejoqariz",
    title: "Sejoqariz | Joseph — Frontend Developer",
    description:
      "Frontend developer building sleek, animated web experiences with Next.js, React, and modern UI.",
    images: [
      {
        url: "/demo.webp",
        width: 1200,
        height: 630,
        alt: "Sejoqariz portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sejoqariz | Joseph — Frontend Developer",
    description:
      "Frontend developer building sleek, animated web experiences with Next.js, React, and modern UI.",
    creator: "@sejoqariz",
    images: ["/demo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
