"use client"

import { motion } from "framer-motion"
import { BrandBadge } from "./brand-badge"
import { useLanguage } from "./language-provider"

const groups = [
  ["TypeScript", "JavaScript", "Python", "PHP", "HTML", "CSS"],
  ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite", "jQuery"],
  ["Django", "Laravel", "Node.js", "APIs REST"],
  ["MySQL", "MariaDB", "SQLite", "Supabase"],
  ["Vercel", "Claude AI", "OpenAI", "cPanel"],
  ["Git", "GitHub", "VS Code", "Cursor", "Postman", "v0"],
]

export default function Skills() {
  const { t } = useLanguage()
  return <section id="skills" className="bg-secondary/10 px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
      <h2 className="mb-5 text-balance text-5xl font-bold md:text-6xl">{t.skills.title} <span className="text-primary">{t.skills.accent}</span></h2><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.skills.subtitle}</p>
    </motion.div>
    <div className="flex flex-col gap-10">{t.skills.categories.map((title, i) => <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} className="border-l border-border pl-6"><h3 className="mb-4 text-lg font-bold">{title}</h3><div className="flex flex-wrap gap-2">{groups[i].map(skill => <BrandBadge key={skill} name={skill} />)}</div></motion.div>)}</div>
  </div></section>
}
