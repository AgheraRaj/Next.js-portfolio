import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://rajaghera.dev"), // TODO: update with your domain
  title: {
    default: "Raj Aghera | Full Stack Developer",
    template: "%s | Raj Aghera",
  },
  description:
    "Full Stack Developer from Ahmedabad, India. Specialising in Next.js, React, Node.js, and TypeScript. Available for freelance and full-time roles.",
  keywords: [
    "Raj Aghera",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Freelance Developer India",
    "Ahmedabad Developer",
  ],
  authors: [{ name: "Raj Aghera", url: "https://github.com/AgheraRaj" }],
  creator: "Raj Aghera",

  // Open Graph — controls how your link looks when shared on Slack, LinkedIn, WhatsApp etc.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rajaghera.dev",
    siteName: "Raj Aghera Portfolio",
    title: "Raj Aghera | Full Stack Developer",
    description:
      "Full Stack Developer from Ahmedabad building fast, scalable web products.",
    images: [
      {
        // TODO: Create a 1200x630 OG image and put it in /public/og-image.png
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raj Aghera — Full Stack Developer",
      },
    ],
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Raj Aghera | Full Stack Developer",
    description:
      "Full Stack Developer from Ahmedabad building fast, scalable web products.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}