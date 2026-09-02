"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

const projects = [
  { title: "HR Copilot Chile", tech: ["Next.js", "TypeScript", "Claude AI", "Tailwind"], live: "https://hr-chile.vercel.app", tag: "hackathon" },
  { title: "Austral Collector", tech: ["JavaScript", "React", "PHP", "MySQL", "PWA"], live: "https://australcollector.cl/", repo: "https://github.com/rjoserivera/Austral_Collector", tag: "client" },
  { title: "Agente Inventario", tech: ["Next.js", "JavaScript", "AI Agent"], repo: "https://github.com/rjoserivera/Agente_inventario_sistema" },
  { title: "OB Care", tech: ["Python", "Django", "HTML5"], repo: "https://github.com/rjoserivera/obtetric_care" },
]

const onlineWork = [
  { title: "Kreative Vit", tech: ["React 19", "Vite 8", "PHP 8.3", "MySQL"], live: "https://kreative-vit.alphadocere.cl/", repo: "https://github.com/rjoserivera/Kreative_Vit", created: true },
  { title: "Kreative · Perfiles web", tech: ["JavaScript", "PHP", "MySQL", "Bootstrap"], live: "https://kreative.alphadocere.cl/", repo: "https://github.com/manosYaEducation/Gen10_Perfiles_web" },
  { title: "Wiki Kreative", tech: ["PHP MVC", "JavaScript", "MySQL", "JWT"], live: "https://wiki.alphadocere.cl/frontend/", repo: "https://github.com/manosYaEducation/wiki-kreative-gen15.5" },
  { title: "Sistema Auth Alpha Docere", tech: ["JWT", "PHP", "Email", "MySQL"], live: "https://systemauth.alphadocere.cl/", repo: "https://github.com/manosYaEducation/jwt-mail-qr" },
]

export default function Projects() {
  const { t } = useLanguage()
  return <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
    <div className="mb-14"><h2 className="mb-5 text-balance text-5xl font-bold md:text-6xl">{t.projects.title} <span className="text-primary">{t.projects.accent}</span></h2><p className="max-w-2xl text-lg text-muted-foreground">{t.projects.subtitle}</p></div>
    <div className="grid gap-5 md:grid-cols-2">{projects.map((project, i) => <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="flex min-h-72 flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary">
      {project.tag && <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">{project.tag === "client" ? t.projects.client : t.projects.hackathon}</p>}
      <h3 className="mb-3 text-2xl font-bold">{project.title}</h3><p className="mb-6 flex-1 leading-relaxed text-muted-foreground">{t.projects.descriptions[i]}</p>
      <div className="mb-6 flex flex-wrap gap-2">{project.tech.map(item => <span key={item} className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{item}</span>)}</div>
      <div className="flex flex-wrap gap-5">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{t.projects.live}<ExternalLink className="size-4" /></a>}{project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"><Github className="size-4" />{t.projects.repo}</a>}</div>
    </motion.article>)}</div>

    <div className="mb-10 mt-24 max-w-3xl">
      <h3 className="mb-5 text-balance text-4xl font-bold md:text-5xl">{t.projects.onlineTitle} <span className="text-primary">{t.projects.onlineAccent}</span></h3>
      <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{t.projects.onlineSubtitle}</p>
    </div>
    <div className="grid gap-5 md:grid-cols-2">{onlineWork.map((project, i) => <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="flex min-h-80 flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">{project.created ? t.projects.created : t.projects.collaboration}</p>
      <h4 className="mb-3 text-2xl font-bold">{project.title}</h4>
      <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">{t.projects.onlineDescriptions[i]}</p>
      <div className="mb-6 flex flex-wrap gap-2">{project.tech.map(item => <span key={item} className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{item}</span>)}</div>
      <div className="flex flex-wrap gap-5"><a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{t.projects.live}<ExternalLink className="size-4" /></a><a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"><Github className="size-4" />{t.projects.repo}</a></div>
    </motion.article>)}</div>
  </div></section>
}
