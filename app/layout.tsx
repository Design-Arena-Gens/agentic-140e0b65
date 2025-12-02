import type { Metadata } from "next";
import "./globals.css";
import { Inter, Merriweather, Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-serif" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Exam Study Guide",
  description: "Comprehensive, exam-ready study guide with clear explanations, definitions, and formulas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${fira.variable}`}>
      <body className={`${inter.className} bg-soft text-slate`}>{children}</body>
    </html>
  );
}
