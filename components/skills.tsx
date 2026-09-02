"use client"

import { Braces, CloudCog, CodeXml, Database, ServerCog, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

const groups = [
  { skills: ["TypeScript", "JavaScript", "Python", "PHP", "HTML", "CSS"], icon: Braces, color: "text-chart-1", surface: "bg-chart-1/10" },
  { skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite", "jQuery"], icon: CodeXml, color: "text-chart-2", surface: "bg-chart-2/10" },
  { skills: ["Django", "Laravel", "Node.js", "APIs REST"], icon: ServerCog, color: "text-chart-3", surface: "bg-chart-3/10" },
  { skills: ["MySQL", "MariaDB", "SQLite", "Supabase"], icon: Database, color: "text-chart-4", surface: "bg-chart-4/10" },
  { skills: ["Vercel", "cPanel", "Claude AI", "OpenAI"], icon: CloudCog, color: "text-chart-5", surface: "bg-chart-5/10" },
  { skills: ["Git", "GitHub", "VS Code", "Cursor", "Postman", "v0"], icon: Wrench, color: "text-primary", surface: "bg-primary/10" },
]

export default function Skills() {
  const { t } = useLanguage()
  return <section id="skills" className="bg-secondary/10 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
      <h2 className="mb-5 text-balance text-5xl font-bold md:text-6xl">{t.skills.title} <span className="text-primary">{t.skills.accent}</span></h2><p className="max-w-2xl text-lg text-muted-foreground">{t.skills.subtitle}</p>
    </motion.div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.skills.categories.map((title, i) => { const group = groups[i]; const Icon = group.icon; return <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }} className="rounded-xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"><div className="mb-5 flex items-center gap-3"><span className={`flex size-11 items-center justify-center rounded-lg ${group.surface}`}><Icon className={`size-6 ${group.color}`} /></span><h3 className="font-bold">{title}</h3></div><div className="flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="rounded-md border border-border bg-secondary/70 px-3 py-1.5 text-sm font-medium text-secondary-foreground">{skill}</span>)}</div></motion.article> })}</div>
  </div></section>
}
