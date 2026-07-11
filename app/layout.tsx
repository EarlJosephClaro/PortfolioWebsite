import type { Metadata } from "next";
import { Spectral, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Earl Joseph A. Claro - Junior Web Developer",
  description:
    "Junior Web Developer at Sun-Asterisk specializing in ReactJS, NextJS, and NestJS for full-stack web development.",
  keywords: ["Earl Joseph Claro", "Web Developer", "React", "Next.js", "NestJS", "Full Stack Developer"],
  authors: [{ name: "Earl Joseph A. Claro" }],
  openGraph: {
    title: "Earl Joseph A. Claro - Junior Web Developer",
    description: "Junior Web Developer at Sun-Asterisk specializing in ReactJS, NextJS, and NestJS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${hanken.variable} ${jetbrainsMono.variable}`}
    >
      <body className={hanken.className}>{children}</body>
    </html>
  );
}
