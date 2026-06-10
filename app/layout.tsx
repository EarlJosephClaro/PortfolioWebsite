import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Earl Joseph A. Claro - Junior Web Developer",
  description: "Junior Web Developer at Sun-Asterisk specializing in ReactJS, NextJS, and NestJS for full-stack web development.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
