"use client"

import { ExternalLink, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function Contact() {
  const { t } = useLanguage()
  const methods = [
    { icon: Mail, label: "Email", value: t.contact.email, href: "mailto:rjoseeliecer@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: t.contact.profile, href: "https://www.linkedin.com/in/rjoseeliecer/", external: true },
    { icon: Github, label: "GitHub", value: t.contact.code, href: "https://github.com/rjoserivera", external: true },
    { icon: Instagram, label: "Instagram", value: t.contact.instagram, href: "https://www.instagram.com/natsuki_subaru_pride_if/", external: true },
  ]
  return <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl text-center">
    <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">{t.contact.title} <span className="text-primary">{t.contact.accent}</span></h2><p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.contact.description}</p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{methods.map(({ icon: Icon, ...method }, i) => <motion.a key={method.label} href={method.href} target={method.external ? "_blank" : undefined} rel={method.external ? "noopener noreferrer" : undefined} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} whileHover={{ y: -4 }} className="rounded-xl border border-border bg-card p-6 focus:outline-none focus:ring-2 focus:ring-primary"><span className="mx-auto mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10"><Icon className="size-5 text-primary" /></span><h3 className="mb-2 font-bold">{method.label}</h3><span className="inline-flex items-center gap-1 text-sm text-muted-foreground">{method.value}{method.external && <ExternalLink className="size-3" />}</span></motion.a>)}</div>
  </div></section>
}
