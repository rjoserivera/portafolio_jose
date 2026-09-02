"use client"

import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rjoseeliecer/" },
  { icon: Github, label: "GitHub", href: "https://github.com/rjoserivera" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/natsuki_subaru_pride_if/" },
]

export default function Contact() {
  const { t } = useLanguage()
  return <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-primary/30 bg-card">
    <div className="grid lg:grid-cols-[1.35fr_.65fr]">
      <div className="p-8 sm:p-12"><p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-primary">{t.contact.eyebrow}</p><h2 className="mb-6 max-w-3xl text-balance text-4xl font-bold md:text-6xl">{t.contact.title} <span className="text-primary">{t.contact.accent}</span></h2><p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{t.contact.description}</p><a href="mailto:rjoseeliecer@gmail.com?subject=Conversemos%20sobre%20un%20proyecto" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"><Mail className="size-5" />{t.contact.email}</a></div>
      <div className="flex flex-col justify-center gap-3 border-t border-border bg-secondary/30 p-8 lg:border-l lg:border-t-0">{links.map(({ icon: Icon, label, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-4 font-semibold transition-colors hover:border-primary hover:text-primary"><span className="flex items-center gap-3"><Icon className="size-5" />{label}</span><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}</div>
    </div>
  </motion.div></section>
}
