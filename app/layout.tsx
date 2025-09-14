import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  title: "Bhatiar Azhari - Network Engineer Portfolio",
  description:
    "Professional Network Engineer portfolio showcasing expertise in network infrastructure, security, system administration, and IT solutions. Based in Depok, Indonesia.",
  keywords: [
    "Network Engineer",
    "IT Professional",
    "Network Infrastructure",
    "System Administration",
    "Cybersecurity",
    "Indonesia",
    "Depok",
  ],
  authors: [{ name: "Bhatiar Azhari" }],
  creator: "Bhatiar Azhari",
  publisher: "Bhatiar Azhari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bhatiar.my.id"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bhatiar Azhari - Network Engineer Portfolio",
    description:
      "Professional Network Engineer portfolio showcasing expertise in network infrastructure, security, and system administration.",
    url: "https://bhatiar.my.id", // Replace with your actual domain
    siteName: "Bhatiar Azhari Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhatiar Azhari - Network Engineer Portfolio",
    description: "Professional Network Engineer portfolio showcasing expertise in network infrastructure and security.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
