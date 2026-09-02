"use client"

import { BrainCircuit, Code2, Languages, Mail, MapPin, Rocket, Timer } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function About() {
  const { t } = useLanguage()
  const icons = [Code2, BrainCircuit, Rocket]
  const facts = [
    { label: t.about.labels.location, value: "Región de Ñuble, Chile", icon: MapPin },
    { label: t.about.labels.email, value: "rjoseeliecer@gmail.com", href: "mailto:rjoseeliecer@gmail.com", icon: Mail },
    { label: t.about.labels.experience, value: t.about.values.experience, icon: Timer },
    { label: t.about.labels.languages, value: t.about.values.languages, icon: Languages },
  ]
  return <section id="about" className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">{t.about.title} <span className="text-primary">{t.about.accent}</span></h2>
      <div className="mb-14 h-1 w-20 rounded-full bg-primary" />
      <div className="mb-16 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground"><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
        <div><h3 className="mb-6 text-xl font-bold">{t.about.expertise}</h3><div className="flex flex-col gap-3">{t.about.cards.map((card, i) => { const Icon = icons[i]; return <div key={card.title} className="flex gap-4 rounded-xl border border-border bg-card p-5"><Icon className="mt-1 size-5 shrink-0 text-primary" /><div><h4 className="mb-1 font-bold">{card.title}</h4><p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p></div></div> })}</div></div>
      </div>
      <h3 className="mb-6 text-xl font-bold">{t.about.info}</h3><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{facts.map(({ label, value, href, icon: Icon }) => <div key={label} className="rounded-xl border border-border bg-card p-5"><Icon className="mb-3 size-5 text-primary"/><p className="mb-1 text-xs text-muted-foreground">{label}</p>{href ? <a className="break-all text-sm font-semibold text-primary hover:underline" href={href}>{value}</a> : <p className="text-sm font-semibold">{value}</p>}</div>)}</div>
    </motion.div>
  </div></section>
}
