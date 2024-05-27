import type { Metadata, ResolvingMetadata } from "next";

import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from "@/prismicio";

// Import and configure fonts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter', display: 'swap' });
const roboto_mono = Roboto_Mono({ subsets: ["latin"], variable: '--font-roboto-mono', display: 'swap' });

// Metadata for the app

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");
  return {
    title: page.data.site_title || "Digital Sigga Portfolio",
    description: page.data.meta_description || "Description", 
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}


// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(inter.className, roboto_mono.className)}>
      <body>

        <header>Header</header>

        {children}

        <footer>Footer</footer>
        </body>
    </html>
  );
}
