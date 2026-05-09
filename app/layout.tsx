import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "AI Engineer Portfolio | Machine Learning & Research Engineering",
  description:
    "Portfolio of an elite AI/ML engineer specializing in large-scale model development, production ML systems, and applied research.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "LLM",
    "Portfolio",
    "Research Engineer",
  ],
  authors: [{ name: "AI Engineer" }],
  openGraph: {
    title: "AI Engineer Portfolio",
    description: "Machine Learning & Research Engineering",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
