"use client"

import { Award, Download, ExternalLink, GraduationCap, Shield, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

const certificates = [
  {
    slug: "titulo",
    file: "/certificados/CERTIFICADO DE TITULO.pdf",
    icon: GraduationCap,
    featured: true,
    color: "from-amber-500/20 to-yellow-500/10",
    borderColor: "border-amber-500/40",
    iconColor: "text-amber-400",
    badgeColor: "bg-amber-500/20 text-amber-300",
  },
  {
    slug: "fullstack",
    file: "/certificados/CERTIFICADO EN DESARROLLADOR FULL STACK.pdf",
    icon: Star,
    featured: false,
    color: "from-primary/20 to-accent/10",
    borderColor: "border-primary/40",
    iconColor: "text-primary",
    badgeColor: "bg-primary/20 text-primary",
  },
  {
    slug: "multicloud",
    file: "/certificados/CERTIFICADO EN ARQUITECTURA MULTICLOUD.pdf",
    icon: Shield,
    featured: false,
    color: "from-sky-500/20 to-blue-500/10",
    borderColor: "border-sky-500/40",
    iconColor: "text-sky-400",
    badgeColor: "bg-sky-500/20 text-sky-300",
  },
  {
    slug: "dev-inicial",
    file: "/certificados/CERTIFICADO EN DESARROLLO DE APLICACIONES INICIALES.pdf",
    icon: Award,
    featured: false,
    color: "from-violet-500/20 to-purple-500/10",
    borderColor: "border-violet-500/40",
    iconColor: "text-violet-400",
    badgeColor: "bg-violet-500/20 text-violet-300",
  },
  {
    slug: "infraestructura",
    file: "/certificados/CERTIFICADO EN INFRAESTRUCTURA TI SEGURA.pdf",
    icon: Shield,
    featured: false,
    color: "from-emerald-500/20 to-green-500/10",
    borderColor: "border-emerald-500/40",
    iconColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
  },
]

export default function Certificates() {
  const { t } = useLanguage()
  const certs = t.certificates

  return (
    <section id="certificates" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-primary">
            {certs.eyebrow}
          </p>
          <h2 className="mb-5 text-balance text-5xl font-bold md:text-6xl">
            {certs.title}{" "}
            <span className="text-primary">{certs.accent}</span>
          </h2>
          <div className="mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {certs.subtitle}
          </p>
        </motion.div>

        {/* Featured certificate (Título) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          {(() => {
            const cert = certificates[0]
            const data = certs.items[0]
            const Icon = cert.icon
            return (
              <div className={`interactive-card cert-featured relative overflow-hidden rounded-2xl border ${cert.borderColor} bg-gradient-to-br ${cert.color} bg-card p-8 sm:p-10`}>
                {/* Glow ring */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-5">
                    <div className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${cert.badgeColor} backdrop-blur`}>
                      <Icon className={`size-8 ${cert.iconColor}`} />
                    </div>
                    <div>
                      <span className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${cert.badgeColor}`}>
                        <Star className="size-3" />
                        {certs.featuredLabel}
                      </span>
                      <h3 className="shimmer-text mb-1 text-2xl font-bold lg:text-3xl">{data.title}</h3>
                      <p className="text-sm text-muted-foreground">{data.institution} · {data.year}</p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{data.description}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <ExternalLink className="size-4" />
                      {certs.view}
                    </a>
                    <a
                      href={cert.file}
                      download
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <Download className="size-4" />
                      {certs.download}
                    </a>
                  </div>
                </div>
              </div>
            )
          })()}
        </motion.div>

        {/* Other certificates grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.slice(1).map((cert, i) => {
            const data = certs.items[i + 1]
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`interactive-card group relative overflow-hidden rounded-xl border ${cert.borderColor} bg-gradient-to-br ${cert.color} bg-card p-6`}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30 blur-2xl" style={{ background: "var(--primary)" }} />
                <div className={`mb-4 flex size-11 items-center justify-center rounded-xl ${cert.badgeColor}`}>
                  <Icon className={`size-5 ${cert.iconColor}`} />
                </div>
                <h3 className="mb-1 text-base font-bold leading-tight">{data.title}</h3>
                <p className="mb-4 text-xs text-muted-foreground">{data.institution} · {data.year}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-background/60 border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="size-3" />
                    {certs.view}
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-1.5 rounded-lg bg-background/60 border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
                  >
                    <Download className="size-3" />
                    {certs.download}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
