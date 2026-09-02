const brandSlugs: Record<string, string> = {
  TypeScript: "typescript", JavaScript: "javascript", Python: "python", PHP: "php", HTML: "html5", CSS: "css3",
  React: "react", "React 19": "react", "Next.js": "nextjs", "Tailwind CSS": "tailwindcss", Tailwind: "tailwindcss",
  Bootstrap: "bootstrap", Vite: "vite", "Vite 8": "vite", jQuery: "jquery", Django: "django", Laravel: "laravel",
  "Node.js": "nodejs", MySQL: "mysql", MariaDB: "mariadb", SQLite: "sqlite", Supabase: "supabase",
  Vercel: "vercel", Git: "git", GitHub: "github", "VS Code": "visual-studio-code", Postman: "postman",
  OpenAI: "openai", "Claude AI": "anthropic", Docker: "docker",
}

export function BrandBadge({ name }: { name: string }) {
  const slug = brandSlugs[name]
  return <span className="inline-flex min-h-9 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 font-mono text-xs font-bold uppercase tracking-wide text-foreground shadow-sm">
    {slug ? <img src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`} alt="" width="18" height="18" className="size-[18px] object-contain" loading="lazy" /> : <span className="flex size-[18px] items-center justify-center rounded bg-primary/15 text-[10px] text-primary">{name.slice(0, 2)}</span>}
    {name}
  </span>
}

export function BrandMark({ slug, label }: { slug: string; label: string }) {
  return <img src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`} alt={`${label} logo`} width="22" height="22" className="size-[22px] object-contain" />
}
