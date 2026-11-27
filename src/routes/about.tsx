import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, HeartHandshake, Scale, Handshake } from "lucide-react";
import { Shell, PageHead } from "@/components/Shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us – TalentBridge" },
    { name: "description", content: "Our mission: close the gap between education and employment for young people." },
    { property: "og:title", content: "About Us – TalentBridge" },
    { property: "og:description", content: "Our mission: close the gap between education and employment for young people." },
  ] }),
  component: Page,
});

const values = [
  { icon: Eye, t: "Our Vision", d: "A future where every young person can turn their education into meaningful, decent work." },
  { icon: HeartHandshake, t: "Our Mission", d: "Connect graduates and job seekers with mentors, structured experience and skills-first employers." },
  { icon: Scale, t: "Equal Access", d: "Free for job seekers, skills-based matching, and support for women and career returners." },
  { icon: Handshake, t: "Partnerships", d: "We work with universities, businesses, NGOs and local governments to build one talent pipeline." },
];

function Page() {
  return (
    <Shell>
      <PageHead eyebrow="About Us" title="Bridging education and employment" desc="Too many graduates are told they need experience to get experience. TalentBridge exists to break that cycle." />
      <div className="mx-auto max-w-6xl px-5 pt-12 grid md:grid-cols-2 gap-5">
        {values.map((v) => (
          <div key={v.t} className="rounded-2xl border p-6 shadow-card flex gap-4">
            <span className="icon-tile shrink-0"><v.icon className="size-6" /></span>
            <div><h3 className="text-lg font-bold">{v.t}</h3><p className="mt-1 text-sm text-muted-foreground">{v.d}</p></div>
          </div>
        ))}
      </div>
      <section className="mx-auto max-w-6xl px-5 pt-16">
        <div className="rounded-3xl bg-hero text-primary-foreground p-10 grid md:grid-cols-3 gap-8">
          {[["SDG 8", "Paid placements and training that lead to decent jobs."], ["SDG 10", "Opportunities based on skills, not connections or background."], ["SDG 17", "Cross-sector partnerships that make impact last."]].map(([t, d]) => (
            <div key={t}><p className="font-display text-3xl font-bold text-accent">{t}</p><p className="mt-2 opacity-85">{d}</p></div>
          ))}
        </div>
        <div className="text-center mt-12"><Link to="/register" className="btn btn-primary">Join TalentBridge</Link></div>
      </section>
    </Shell>
  );
}
