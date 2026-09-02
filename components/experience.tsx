"use client"

import { Calendar, CircuitBoard, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export default function Experience() {
  const { t } = useLanguage()
  return <section id="journey" className="bg-secondary/10 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl">
    <div className="mb-14"><h2 className="mb-5 text-balance text-5xl font-bold md:text-6xl">{t.journey.title} <span className="text-primary">{t.journey.accent}</span></h2><p className="max-w-2xl text-lg text-muted-foreground">{t.journey.subtitle}</p></div>
    <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
      <div className="flex flex-col">{t.journey.items.map((item) => <motion.article key={item.title} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative border-l-2 border-primary/30 pb-10 pl-8 last:pb-0"><span className="absolute -left-2 top-1 size-3 rounded-full bg-primary"/><div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row"><h3 className="flex items-center gap-2 text-xl font-bold">{item.title.includes("Electr") && <CircuitBoard className="size-5 text-primary" />}{item.title}</h3><span className="inline-flex items-center gap-2 text-sm text-primary"><Calendar className="size-4" />{item.meta}</span></div><p className="leading-relaxed text-muted-foreground">{item.description}</p></motion.article>)}</div>
      <aside className="interactive-card h-fit rounded-xl border border-border bg-card p-6"><div className="mb-5 flex items-center gap-3"><GraduationCap className="size-5 text-primary"/><h3 className="text-xl font-bold">{t.journey.education}</h3></div><ul className="flex flex-col gap-3">{t.journey.educationItems.map(item => <li key={item} className="rounded-lg bg-secondary px-4 py-3 text-sm leading-relaxed text-secondary-foreground">{item}</li>)}</ul></aside>
    </div>
  </div></section>
}
