"use client"

import Image from "next/image"
import { ArrowRight, Code2, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { SilkBackground } from "./aceternity/silk-background"
import { useLanguage } from "./language-provider"

export default function Hero() {
  const { t } = useLanguage()
  const stats = [{ value: "2022", label: t.hero.since }, { value: "Ñuble", label: t.hero.location }, { value: "TNS", label: t.hero.education }]
  return <SilkBackground><section id="main-content" className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-primary">{t.hero.role}</p>
        <h1 className="mb-6 text-balance text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">José Eliecer <span className="text-foreground">Rivera</span></h1>
        <p className="mb-9 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">{t.hero.intro}</p>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row"><motion.a href="#projects" whileHover={{ y: -2 }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-medium text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">{t.hero.work}<ArrowRight className="size-4" /></motion.a><motion.a href="#contact" whileHover={{ y: -2 }} className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-7 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary"><Code2 className="size-4" />{t.hero.talk}</motion.a></div>
        <div className="grid gap-3 sm:grid-cols-3">{stats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + index * .1 }} className="interactive-card rounded-xl border border-border bg-card/80 p-5 backdrop-blur"><div className="mb-1 text-2xl font-bold text-primary">{stat.value}</div><div className="flex items-center gap-1 text-sm text-muted-foreground">{index === 1 && <MapPin className="size-4" />}{stat.label}</div></motion.div>)}</div>
      </motion.div>
      <motion.figure initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .15 }} className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-3 rounded-2xl border border-primary/30" aria-hidden="true" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"><Image src="/images/jose-eliecer-rivera.jpeg" alt="Retrato profesional de José Eliecer Rivera" fill priority sizes="(min-width: 1024px) 420px, 90vw" className="object-cover object-center" /></div>
        <figcaption className="absolute bottom-5 left-5 rounded-lg border border-border bg-background/90 px-4 py-3 backdrop-blur"><strong className="block text-sm">José Eliecer Rivera</strong><span className="text-xs text-muted-foreground">Ñuble, Chile</span></figcaption>
      </motion.figure>
    </div>
  </section></SilkBackground>
}
