'use client'
import { useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nanbankan Menu Trainer",
  description: "Built by Jaytee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [page, setPage] = useState("");

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <header className={styles.header}>
            <h1 className={styles.pageTitle}>Nanbankan Menu Trainer</h1>

            <ul className={styles.links}>
              <li className={styles.linkItem}><button onClick={() => setPage("grill")}>Grill</button></li>
              <li className={styles.linkItem}><button onClick={() => setPage("kitchen")}>Kitchen</button></li>
              <li className={styles.linkItem}><button onClick={() => setPage("specials")}>Specials</button></li>
              <li className={styles.linkItem}><button onClick={() => setPage("misc")}>Misc</button></li>
              <li className={styles.linkItem}><button onClick={() => setPage("drinks")}>Drinks</button></li>
            </ul>
          </header>
            
          <main className={styles.main}>
            {children}
          </main>
        
          <footer className={styles.footer}>Built with ❤️ by <a href="https://whoisjaytee.com" target="_blank">Jaytee</a></footer>
        </div>
      </body>
    </html>
  );
}
