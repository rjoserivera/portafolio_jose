"use client"

import { BrainCircuit, Cloud, Code2, Database, Server, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

const skillLists = [
  ["TypeScript", "JavaScript", "Python", "PHP", "HTML", "CSS"],
  ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite", "jQuery"],
  ["Django", "Laravel", "Node.js"],
  ["MySQL", "MariaDB", "SQLite", "Supabase"],
  ["Vercel", "cPanel", "Claude AI", "OpenAI"],
  ["Git", "GitHub", "Claude Code", "VS Code", "Cursor", "Postman", "v0"],
]
const icons = [Code2, Code2, Server, Database, Cloud, Wrench]

export default function Skills() {
  const { t } = useLanguage()
  return <section id="skills" className="bg-secondary/10 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
      <h2 className="mb-5 text-balance text-5xl font-bold md:text-6xl">{t.skills.title} <span className="text-primary">{t.skills.accent}</span></h2><p className="max-w-2xl text-lg text-muted-foreground">{t.skills.subtitle}</p>
    </motion.div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.skills.categories.map((title, i) => { const Icon = icons[i]; return <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }} className="rounded-xl border border-border bg-card p-6"><div className="mb-5 flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-lg bg-primary/10"><Icon className="size-5 text-primary" /></span><h3 className="font-bold">{title}</h3></div><div className="flex flex-wrap gap-2">{skillLists[i].map(skill => <span key={skill} className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">{skill}</span>)}</div></motion.article> })}</div>
  </div></section>
}
