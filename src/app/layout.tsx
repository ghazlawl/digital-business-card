import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "~/app/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Klatt - Full-Stack Developer",
  description:
    "Passionate full-stack developer seeking new opportunities to create impactful web applications.",
  robots: "noindex,nofollow",
  openGraph: {
    title: "James Klatt - Full-Stack Developer",
    description:
      "Passionate full-stack developer seeking new opportunities to create impactful web applications.",
    url: "https://ghazlawl.dev",
    siteName: "James Klatt - Digital Business Card",
    images: [
      {
        url: "/images/opengraph.webp",
        width: 1200,
        height: 630,
        alt: "James Klatt - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Klatt - Full-Stack Developer",
    description:
      "Passionate full-stack developer seeking new opportunities to create impactful web applications.",
    images: ["/images/me-opengraph.webp"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/favicons/site.webmanifest",
  other: {
    "msapplication-TileColor": "#da532c",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
