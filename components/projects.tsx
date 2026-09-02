"use client"

import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { BrandBadge, BrandMark } from "./brand-badge"
import { useLanguage } from "./language-provider"

const projects = [
  { title: "Kreative Vit", tech: ["React 19", "Vite 8", "PHP 8.3", "MySQL"], live: "https://kreative-vit.alphadocere.cl/", repo: "https://github.com/rjoserivera/Kreative_Vit", type: "created" },
  { title: "Kreative · Perfiles web", tech: ["JavaScript", "PHP", "MySQL", "Bootstrap"], live: "https://kreative.alphadocere.cl/", repo: "https://github.com/manosYaEducation/Gen10_Perfiles_web", type: "collaboration" },
  { title: "Wiki Kreative", tech: ["PHP MVC", "JavaScript", "MySQL", "JWT"], live: "https://wiki.alphadocere.cl/frontend/", repo: "https://github.com/manosYaEducation/wiki-kreative-gen15.5", type: "collaboration" },
  { title: "Sistema Auth Alpha Docere", tech: ["JWT", "PHP", "Email", "MySQL"], live: "https://systemauth.alphadocere.cl/", repo: "https://github.com/manosYaEducation/jwt-mail-qr", type: "collaboration" },
  { title: "Austral Collector", tech: ["React", "PHP", "MySQL", "PWA"], live: "https://australcollector.cl/", repo: "https://github.com/rjoserivera/Austral_Collector", type: "client" },
  { title: "Agente Inventario", tech: ["Next.js", "JavaScript", "AI Agent"], repo: "https://github.com/rjoserivera/Agente_inventario_sistema", type: "personal" },
  { title: "OB Care", tech: ["Python", "Django", "HTML5"], repo: "https://github.com/rjoserivera/obtetric_care", type: "personal" },
  { title: "HR Copilot Chile", tech: ["Next.js", "TypeScript", "Claude AI"], live: "https://hr-chile.vercel.app", type: "hackathon" },
] as const

export default function Projects() {
  const { t } = useLanguage()
  const labels = { created: t.projects.created, collaboration: t.projects.collaboration, client: t.projects.client, personal: t.projects.personal, hackathon: t.projects.hackathon }
  return <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
    <div className="mb-14"><h2 className="mb-5 text-balance text-5xl font-bold md:text-6xl">{t.projects.title} <span className="text-primary">{t.projects.accent}</span></h2><p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{t.projects.subtitle}</p></div>
    <div className="grid gap-5 md:grid-cols-2">{projects.map((project, i) => <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * .08 }} className="interactive-card flex min-h-80 flex-col rounded-xl border border-border bg-card p-7">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">{labels[project.type]}</p>
      <h3 className="mb-3 text-2xl font-bold">{project.title}</h3><p className="mb-6 flex-1 leading-relaxed text-muted-foreground">{t.projects.descriptions[i]}</p>
      <div className="mb-6 flex flex-wrap gap-2">{project.tech.map(item => <BrandBadge key={item} name={item} />)}</div>
      <div className="flex flex-wrap gap-5">{"live" in project && project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{t.projects.live}<ExternalLink className="size-4" /></a>}{"repo" in project && project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"><BrandMark slug="github" label="GitHub" />{t.projects.repo}</a>}</div>
    </motion.article>)}</div>
  </div></section>
}
