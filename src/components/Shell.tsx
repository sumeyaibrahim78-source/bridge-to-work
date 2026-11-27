import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Waypoints, LogOut } from "lucide-react";
import { useUser, setUser } from "@/lib/auth";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/opportunities", label: "Find Opportunities" },
  { to: "/mentors", label: "Find a Mentor" },
  { to: "/skills-matching", label: "Skills Matching" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
      <span className="grid place-items-center size-9 rounded-xl bg-primary text-primary-foreground"><Waypoints className="size-5" /></span>
      TalentBridge
    </Link>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const user = useUser();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 h-16 gap-4">
          <Logo />
          <nav className="hidden lg:flex gap-5 text-sm font-semibold">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }}>{n.label}</Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            {user ? (
              <>
                <span className="text-sm font-semibold">Hi, {user.name.split(" ")[0]}</span>
                <button onClick={() => setUser(null)} className="btn bg-secondary text-sm py-2" aria-label="Log out"><LogOut className="size-4" /></button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn text-sm py-2 text-primary">Log in</Link>
                <Link to="/register" className="btn btn-primary text-sm py-2">Register</Link>
              </>
            )}
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="lg:hidden border-t px-5 py-4 grid gap-3 font-semibold">
            {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground">{n.label}</Link>)}
            {user ? <button onClick={() => setUser(null)} className="btn bg-secondary justify-center">Log out</button> : (
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link to="/login" className="btn bg-secondary justify-center">Log in</Link>
                <Link to="/register" className="btn btn-primary justify-center">Register</Link>
              </div>
            )}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <p className="font-display text-xl font-bold">TalentBridge</p>
            <p className="mt-2 opacity-75 max-w-sm">Connecting Skills to Opportunities. Helping graduates and job seekers gain local work experience.</p>
            <div className="mt-4 flex gap-2">
              <span className="chip bg-sdg8 text-primary-foreground">SDG 8</span>
              <span className="chip bg-sdg10 text-primary-foreground">SDG 10</span>
              <span className="chip bg-sdg17 text-primary-foreground border border-primary-foreground/30">SDG 17</span>
            </div>
          </div>
          <div className="grid gap-2 opacity-85">
            <Link to="/opportunities">Opportunities</Link><Link to="/mentors">Mentors</Link><Link to="/skills-matching">Skills Matching</Link><Link to="/training">Training</Link>
          </div>
          <div className="grid gap-2 opacity-85">
            <Link to="/about">About Us</Link><Link to="/partners">For Employers</Link><Link to="/contact">Contact</Link><Link to="/register">Register</Link>
          </div>
        </div>
        <p className="text-center text-xs opacity-60 pb-6">© 2026 TalentBridge</p>
      </footer>
    </div>
  );
}

export function PageHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-widest text-ring">{eyebrow}</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-primary">{title}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{desc}</p>
      </div>
    </section>
  );
}
