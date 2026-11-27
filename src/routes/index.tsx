import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Users, Briefcase, Target, ArrowRight, CheckCircle2, Building2, Sparkles } from "lucide-react";
import { Shell } from "@/components/Shell";
import { opportunities, mentors } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TalentBridge – Connecting Skills to Opportunities" },
      { name: "description", content: "Gain local work experience, find mentors, discover internships and fellowships, and connect with skills-first employers." },
      { property: "og:title", content: "TalentBridge – Connecting Skills to Opportunities" },
      { property: "og:description", content: "Mentors, internships, fellowships and skills-first employers for young graduates and job seekers." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Briefcase, t: "Find Opportunities", d: "Paid internships, fellowships, returnships and entry roles.", to: "/opportunities" },
  { icon: Users, t: "Find a Mentor", d: "Free 1:1 guidance from experienced local professionals.", to: "/mentors" },
  { icon: Target, t: "Skills Matching", d: "Tell us your skills — see the roles that fit you best.", to: "/skills-matching" },
  { icon: GraduationCap, t: "Practical Training", d: "Short courses that make you workplace-ready.", to: "/training" },
] as const;

const steps = ["Create your free profile", "Add your skills and interests", "Get matched with roles and mentors", "Gain experience and get hired"];

const sdgs = [
  { n: "8", t: "Decent Work & Economic Growth", d: "Reducing youth unemployment through paid, structured first experiences.", c: "bg-sdg8" },
  { n: "10", t: "Reduced Inequalities", d: "Free access and skills-based hiring that looks past background and connections.", c: "bg-sdg10" },
  { n: "17", t: "Partnerships for the Goals", d: "Universities, employers and communities building one shared talent pipeline.", c: "bg-sdg17" },
];

function HeroArt() {
  return (
    <div className="relative h-[360px] hidden md:block">
      <div className="absolute inset-6 rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5" />
      <div className="absolute left-0 top-8 w-60 rounded-2xl bg-card text-card-foreground p-4 shadow-card">
        <div className="flex items-center gap-3"><span className="icon-tile size-10"><GraduationCap className="size-5" /></span><div><p className="font-bold text-sm">Layla, Graduate</p><p className="text-xs text-muted-foreground">BSc Computer Science</p></div></div>
        <div className="mt-3 flex flex-wrap gap-1"><span className="chip">React</span><span className="chip">SQL</span><span className="chip">Teamwork</span></div>
      </div>
      <div className="absolute right-0 top-28 w-60 rounded-2xl bg-card text-card-foreground p-4 shadow-card">
        <div className="flex items-center gap-3"><span className="icon-tile size-10"><Building2 className="size-5" /></span><div><p className="font-bold text-sm">Souq Digital</p><p className="text-xs text-muted-foreground">Junior Developer</p></div></div>
        <p className="mt-3 flex items-center gap-1 text-sm font-bold text-ring"><Sparkles className="size-4" /> 92% skills match</p>
      </div>
      <div className="absolute left-10 bottom-4 w-64 rounded-2xl bg-accent text-accent-foreground p-4 shadow-card">
        <p className="text-sm font-bold flex items-center gap-2"><CheckCircle2 className="size-4" /> Mentor session booked</p>
        <p className="text-xs mt-1">with Omar K., Engineering Manager</p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <Shell>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="chip bg-primary-foreground/10 text-primary-foreground">For graduates, job seekers & career returners</p>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05]">Connecting skills to <span className="text-accent">opportunities.</span></h1>
            <p className="mt-5 max-w-lg text-lg opacity-85">Gain local work experience, learn from mentors and meet employers who hire for what you can do — not only for years on a CV.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className="btn btn-accent">Get started free <ArrowRight className="size-4" /></Link>
              <Link to="/opportunities" className="btn btn-ghost-light">Browse opportunities</Link>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 -mt-10 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[["2,400+", "Job seekers placed"], ["380", "Volunteer mentors"], ["120", "Hiring partners"], ["68%", "Hired within 6 months"]].map(([v, l]) => (
          <div key={l} className="rounded-2xl bg-card p-5 shadow-card text-center"><p className="font-display text-3xl font-bold text-primary">{v}</p><p className="text-sm text-muted-foreground">{l}</p></div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Everything you need to start your career</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <Link key={f.t} to={f.to} className="group rounded-2xl bg-card border p-6 shadow-card hover:-translate-y-1 transition">
              <span className="icon-tile"><f.icon className="size-6" /></span>
              <h3 className="mt-4 text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-ring">Explore <ArrowRight className="size-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">How it works</h2>
            <ol className="mt-8 grid gap-4">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4 rounded-xl bg-card p-4 shadow-card"><span className="grid place-items-center size-10 rounded-full bg-primary text-primary-foreground font-bold">{i + 1}</span><span className="font-semibold">{s}</span></li>
              ))}
            </ol>
          </div>
          <div>
            <div className="flex justify-between items-end"><h2 className="text-2xl font-bold text-primary">Latest opportunities</h2><Link to="/opportunities" className="text-sm font-bold text-ring">View all</Link></div>
            <div className="mt-6 grid gap-4">
              {opportunities.slice(0, 3).map((o) => (
                <div key={o.id} className="rounded-xl bg-card p-5 shadow-card">
                  <div className="flex justify-between gap-2"><h3 className="font-bold">{o.title}</h3><span className="chip">{o.type}</span></div>
                  <p className="text-sm text-muted-foreground">{o.org} · {o.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex justify-between items-end"><h2 className="text-3xl font-bold text-primary">Featured mentors</h2><Link to="/mentors" className="text-sm font-bold text-ring">All mentors</Link></div>
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {mentors.slice(0, 3).map((m) => (
            <div key={m.name} className="rounded-2xl border p-6 shadow-card text-center">
              <div className="mx-auto size-16 rounded-full bg-accent text-accent-foreground grid place-items-center font-display text-xl font-bold">{m.initials}</div>
              <h3 className="mt-3 font-bold">{m.name}</h3><p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-primary">Aligned with the UN Global Goals</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {sdgs.map((s) => (
            <div key={s.n} className="rounded-2xl bg-card overflow-hidden shadow-card border">
              <div className={`${s.c} text-primary-foreground px-6 py-4 flex items-baseline gap-3`}><span className="font-display text-4xl font-bold">{s.n}</span><span className="text-xs font-bold uppercase tracking-wide">SDG</span></div>
              <div className="p-6"><h3 className="font-bold">{s.t}</h3><p className="mt-2 text-sm text-muted-foreground">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
