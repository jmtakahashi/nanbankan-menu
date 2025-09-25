import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <header  className={styles.header}>
            <h1 id="top" className={styles.pageTitle}>Nanbankan Menu Trainer</h1>

            <ul className="links">
              <li className="linkItem"><Link href="/">Grill </Link></li>
              <li className="linkItem"><Link href="/kitchen">Kitchen </Link></li>
              <li className="linkItem"><Link href="/specials">Specials </Link></li>
              <li className="linkItem"><Link href="/misc-food">Misc </Link></li>
              <li className="linkItem"><Link href="/drinks">Drinks </Link></li>
            </ul>
          </header>
            
          <main className={styles.main}>
            {children}
          </main>
        
          <footer className={styles.footer}></footer>
        </div>
      </body>
    </html>
  );
}
