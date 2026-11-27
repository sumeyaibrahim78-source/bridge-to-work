import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { opportunities } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bridgeway — From education to employment" },
      { name: "description", content: "Mentors, fellowships, returnships and skills-first employers helping graduates and job seekers gain local work experience." },
      { property: "og:title", content: "Bridgeway — From education to employment" },
      { property: "og:description", content: "Mentors, fellowships, returnships and skills-first hiring for young graduates and job seekers." },
    ],
  }),
  component: Index,
});

const pillars = [
  { t: "Mentorship", d: "1:1 guidance from experienced professionals in your field.", to: "/mentors" },
  { t: "Fellowships & returnships", d: "Structured, paid programs to build real local experience.", to: "/opportunities" },
  { t: "Practical training", d: "Short courses that close the gap between classroom and workplace.", to: "/training" },
  { t: "Skills-first hiring", d: "Employers who assess what you can do, not just years on a CV.", to: "/partners" },
] as const;

const sdgs = [
  { n: "8", t: "Decent work & economic growth", d: "Reducing youth unemployment through paid, structured first experiences.", c: "bg-sdg8" },
  { n: "10", t: "Reduced inequalities", d: "Free access, skills-based matching and support for career returners.", c: "bg-sdg10" },
  { n: "17", t: "Partnerships for the goals", d: "Universities, businesses and communities working on one pipeline.", c: "bg-sdg17" },
];

function Index() {
  return (
    <Shell>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <p className="chip">For graduates, job seekers & career returners</p>
            <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[1.02]">Your first experience <em className="text-accent not-italic">shouldn't</em> require experience.</h1>
            <p className="mt-6 max-w-xl text-lg opacity-85">Bridgeway connects you with mentors, fellowships, returnships and employers who hire for skills — so you can build local work experience and a professional network.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/opportunities" className="btn btn-accent">Explore opportunities →</Link>
              <Link to="/mentors" className="btn btn-ghost-light">Meet a mentor</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["2,400+", "job seekers placed"], ["380", "volunteer mentors"], ["120", "hiring partners"], ["68%", "hired within 6 months"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-5">
                <p className="font-display text-4xl text-accent">{v}</p>
                <p className="mt-1 text-sm opacity-80">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-semibold max-w-xl">Four bridges into work</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <Link key={p.t} to={p.to} className="group rounded-2xl bg-card p-6 shadow-card hover:-translate-y-1 transition">
              <span className="font-display text-accent text-3xl">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex justify-between items-end gap-4">
            <h2 className="text-4xl font-semibold">Open this month</h2>
            <Link to="/opportunities" className="text-sm font-semibold text-primary">See all →</Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {opportunities.slice(0, 3).map((o) => (
              <article key={o.id} className="rounded-2xl bg-card p-6 shadow-card">
                <span className="chip">{o.type}</span>
                <h3 className="mt-3 text-xl font-semibold">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.org} · {o.location}</p>
                <p className="mt-3 text-sm">{o.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-semibold">Built around the Global Goals</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {sdgs.map((s) => (
            <div key={s.n} className="rounded-2xl bg-card overflow-hidden shadow-card">
              <div className={`${s.c} text-primary-foreground px-6 py-4 flex items-baseline gap-3`}>
                <span className="font-display text-4xl font-bold">{s.n}</span><span className="text-sm font-semibold uppercase tracking-wide">SDG</span>
              </div>
              <div className="p-6"><h3 className="text-lg font-semibold">{s.t}</h3><p className="mt-2 text-sm text-muted-foreground">{s.d}</p></div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
