"use client"

import { useEffect, useState } from "react"
import About from "@/components/about"
import Contact from "@/components/contact"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import { LanguageProvider } from "@/components/language-provider"
import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("darkMode")
    const dark = saved === null ? true : saved === "true"
    setIsDark(dark)
    document.documentElement.classList.toggle("dark", dark)
  }, [])

  const toggleDarkMode = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem("darkMode", String(next))
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
