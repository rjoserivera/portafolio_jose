"use client"

import { useLanguage } from "./language-provider"

export default function Footer() {
  const { t } = useLanguage()
  const links = [{ href: "#about", label: t.nav.about }, { href: "#skills", label: t.nav.skills }, { href: "#projects", label: t.nav.projects }, { href: "#journey", label: t.nav.journey }]
  return <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
    <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><div><div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">JR</div><p className="font-bold">José Eliecer Rivera</p><p className="text-sm text-muted-foreground">Full Stack Developer · TNS Analista Programador</p></div>
    <nav><h3 className="mb-4 font-bold">{t.footer.nav}</h3><ul className="flex flex-col gap-2 text-sm text-muted-foreground">{links.map(link => <li key={link.href}><a className="hover:text-foreground" href={link.href}>{link.label}</a></li>)}</ul></nav>
    <div><h3 className="mb-4 font-bold">{t.footer.focus}</h3><ul className="flex flex-col gap-2 text-sm text-muted-foreground">{t.footer.focusItems.map(item => <li key={item}>{item}</li>)}</ul></div>
    <div><h3 className="mb-4 font-bold">{t.footer.location}</h3><p className="text-sm text-muted-foreground">Región de Ñuble, Chile</p></div></div>
    <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row"><p>© {new Date().getFullYear()} José Eliecer Rivera. {t.footer.rights}</p><p>{t.footer.crafted}</p></div>
  </div></footer>
}
