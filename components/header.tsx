"use client"

import Link from "next/link"
import { Languages, Menu, Moon, Sun, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "./language-provider"

interface HeaderProps { isDark: boolean; toggleDarkMode: () => void }

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const navLinks = [
    { href: "#about", label: t.nav.about }, { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects }, { href: "#journey", label: t.nav.journey },
    { href: "#contact", label: t.nav.contact },
  ]

  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-primary focus:p-2 focus:text-primary-foreground">{t.ui.skip}</a>
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#main-content" className="flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">JR</span>
          <span className="hidden text-lg font-bold sm:inline">José Eliecer Rivera</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label={t.ui.mainNav}>{navLinks.map((link) => <a key={link.href} href={link.href} className="rounded px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary">{link.label}</a>)}</nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setLanguage(language === "es" ? "en" : "es")} className="inline-flex h-9 items-center gap-2 rounded-lg border border-border px-3 text-sm font-semibold transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary" aria-label={`${t.ui.language}. ${language === "es" ? "English" : "Español"}`}><Languages className="size-4" aria-hidden="true" /><span>{language.toUpperCase()}</span></button>
          <button onClick={toggleDarkMode} className="rounded-lg p-2 transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary" aria-label={isDark ? t.ui.light : t.ui.dark}>{isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}</button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-lg p-2 transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary md:hidden" aria-label={isMenuOpen ? t.ui.closeMenu : t.ui.openMenu} aria-expanded={isMenuOpen}>{isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
      </div>
      {isMenuOpen && <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4 md:hidden" aria-label={t.ui.mobileNav}>{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">{link.label}</a>)}</nav>}
    </header>
  </>
}
