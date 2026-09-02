const brandSlugs: Record<string, string> = {
  TypeScript: "typescript", JavaScript: "javascript", Python: "python", PHP: "php", HTML: "html5", HTML5: "html5", CSS: "css3",
  React: "react", "React 19": "react", "Next.js": "nextjs", "Tailwind CSS": "tailwindcss", Tailwind: "tailwindcss",
  Bootstrap: "bootstrap", Vite: "vite", "Vite 8": "vite", jQuery: "jquery", Django: "django", Laravel: "laravel",
  "Node.js": "nodejs", MySQL: "mysql", MariaDB: "mariadb", SQLite: "sqlite", Supabase: "supabase",
  Vercel: "vercel", Git: "git", GitHub: "github", "VS Code": "visual-studio-code", Postman: "postman",
  OpenAI: "openai", "Claude AI": "anthropic", Docker: "docker",
}

const brandStyles: Record<string, { background: string; color: string }> = {
  TypeScript: { background: "#3178c6", color: "#ffffff" }, JavaScript: { background: "#f7df1e", color: "#111111" }, Python: { background: "#3776ab", color: "#ffffff" }, PHP: { background: "#777bb4", color: "#ffffff" }, HTML: { background: "#e34f26", color: "#ffffff" }, HTML5: { background: "#e34f26", color: "#ffffff" }, CSS: { background: "#1572b6", color: "#ffffff" },
  React: { background: "#20232a", color: "#61dafb" }, "React 19": { background: "#20232a", color: "#61dafb" }, "Next.js": { background: "#000000", color: "#ffffff" }, "Tailwind CSS": { background: "#0f172a", color: "#38bdf8" }, Tailwind: { background: "#0f172a", color: "#38bdf8" }, Bootstrap: { background: "#7952b3", color: "#ffffff" }, Vite: { background: "#646cff", color: "#ffffff" }, "Vite 8": { background: "#646cff", color: "#ffffff" }, jQuery: { background: "#0769ad", color: "#ffffff" },
  Django: { background: "#092e20", color: "#ffffff" }, Laravel: { background: "#ff2d20", color: "#ffffff" }, "Node.js": { background: "#5fa04e", color: "#ffffff" }, MySQL: { background: "#4479a1", color: "#ffffff" }, MariaDB: { background: "#003545", color: "#ffffff" }, SQLite: { background: "#003b57", color: "#ffffff" }, Supabase: { background: "#249361", color: "#ffffff" }, Git: { background: "#f05032", color: "#ffffff" }, GitHub: { background: "#24292f", color: "#ffffff" }, Docker: { background: "#2496ed", color: "#ffffff" }, Postman: { background: "#ff6c37", color: "#ffffff" },
}

export function BrandBadge({ name }: { name: string }) {
  const slug = brandSlugs[name]
  const style = brandStyles[name] ?? { background: "var(--card)", color: "var(--card-foreground)" }
  return <span style={style} className="inline-flex min-h-9 items-center gap-2 rounded-md border border-foreground/10 px-3 py-2 font-mono text-xs font-bold uppercase tracking-wide shadow-sm transition-transform hover:-translate-y-0.5">
    {slug ? <img src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`} alt="" width="18" height="18" className="size-[18px] object-contain" loading="lazy" /> : <span className="flex size-[18px] items-center justify-center rounded bg-foreground/15 text-[10px]">{name.slice(0, 2)}</span>}
    {name}
  </span>
}

export function BrandMark({ slug, label }: { slug: string; label: string }) {
  return <span className="flex size-8 items-center justify-center rounded-md bg-foreground/10"><img src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`} alt={`${label} logo`} width="20" height="20" className={slug === "github" ? "github-brand-mark size-5 object-contain" : "size-5 object-contain"} /></span>
}
