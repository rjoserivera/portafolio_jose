import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://github.com/rjoserivera"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jose Rivera | Full Stack Developer & AI Builder",
  description: "Desarrollador Full Stack de la Región de Ñuble, Chile. Construyo productos con Next.js, React, Django e inteligencia artificial.",
  keywords: ["Jose Rivera", "Full Stack Developer", "Next.js", "React", "Django", "AI Builder", "Chile", "Ñuble"],
  openGraph: { title: "Jose Rivera | Full Stack Developer & AI Builder", description: "Productos web e inteligencia artificial para resolver problemas reales.", type: "website", locale: "es_CL", alternateLocale: "en_US", url: siteUrl },
  twitter: { card: "summary", title: "Jose Rivera | Full Stack Developer & AI Builder", description: "Productos web e inteligencia artificial para resolver problemas reales." },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: "#0b090a", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: "Jose Rivera", url: siteUrl, jobTitle: "Full Stack Developer & AI Builder", email: "mailto:rjoseeliecer@gmail.com", address: { "@type": "PostalAddress", addressRegion: "Región de Ñuble", addressCountry: "CL" }, sameAs: ["https://github.com/rjoserivera", "https://www.linkedin.com/in/rjoseeliecer/", "https://www.instagram.com/natsuki_subaru_pride_if/"], knowsAbout: ["Next.js", "React", "Django", "TypeScript", "Python", "Artificial Intelligence"] }
  return <html lang="es" className="bg-background" suppressHydrationWarning><body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>{children}<Analytics /><Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} /></body></html>
}
