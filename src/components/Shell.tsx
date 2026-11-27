import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/opportunities", label: "Opportunities" },
  { to: "/mentors", label: "Mentors" },
  { to: "/training", label: "Training" },
  { to: "/partners", label: "Partners" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 h-16">
          <Link to="/" className="font-display text-2xl font-semibold text-primary">Bridgeway</Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>{n.label}</Link>
            ))}
          </nav>
          <Link to="/opportunities" className="btn btn-primary text-sm">Find opportunities</Link>
        </div>
        <nav className="md:hidden flex gap-4 overflow-x-auto px-5 pb-3 text-sm">
          {nav.map((n) => <Link key={n.to} to={n.to} className="text-muted-foreground">{n.label}</Link>)}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t mt-20">
        <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p><span className="font-display text-lg text-foreground">Bridgeway</span> — from education to employment.</p>
          <p>Advancing SDG 8 · SDG 10 · SDG 17</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 pb-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/70">{eyebrow}</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-semibold">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{desc}</p>
    </section>
  );
}
