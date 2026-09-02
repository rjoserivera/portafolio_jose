"use client"

import { ArrowRight, Code2, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { SilkBackground } from "./aceternity/silk-background"
import { useLanguage } from "./language-provider"

export default function Hero() {
  const { t } = useLanguage()
  const stats = [{ value: "2022", label: t.hero.since }, { value: "Ñuble", label: t.hero.location }, { value: "AI", label: t.hero.focus }]
  return <SilkBackground><section id="main-content" className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
    <motion.div className="mx-auto max-w-5xl text-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"><Sparkles className="size-4" aria-hidden="true" />{t.hero.badge}</div>
      <p className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground">{t.hero.role}</p>
      <h1 className="mb-6 text-balance text-6xl font-bold leading-none tracking-tight sm:text-7xl lg:text-8xl">Jose <span className="text-primary">Rivera</span></h1>
      <p className="mx-auto mb-10 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">{t.hero.intro}</p>
      <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
        <motion.a href="#projects" whileHover={{ y: -2 }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-medium text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">{t.hero.work}<ArrowRight className="size-4" /></motion.a>
        <motion.a href="#contact" whileHover={{ y: -2 }} className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-7 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary"><Code2 className="size-4" />{t.hero.talk}</motion.a>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">{stats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + index * .1 }} className="rounded-xl border border-border bg-card/80 p-5 backdrop-blur"><div className="mb-1 text-2xl font-bold text-primary">{stat.value}</div><div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">{index === 1 && <MapPin className="size-4" />}{stat.label}</div></motion.div>)}</div>
    </motion.div>
  </section></SilkBackground>
}
