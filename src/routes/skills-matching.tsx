import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { Shell, PageHead } from "@/components/Shell";
import { opportunities } from "@/lib/data";

export const Route = createFileRoute("/skills-matching")({
  head: () => ({ meta: [
    { title: "Skills Matching – TalentBridge" },
    { name: "description", content: "Pick your skills and instantly see the opportunities that match you best." },
    { property: "og:title", content: "Skills Matching – TalentBridge" },
    { property: "og:description", content: "Pick your skills and instantly see the opportunities that match you best." },
  ] }),
  component: Page,
});

const allSkills = Array.from(new Set(opportunities.flatMap((o) => o.skills))).sort();

function Page() {
  const [mine, setMine] = useState<string[]>([]);
  const toggle = (s: string) => setMine((m) => (m.includes(s) ? m.filter((x) => x !== s) : [...m, s]));
  const results = useMemo(() => opportunities
    .map((o) => ({ o, score: Math.round((o.skills.filter((s) => mine.includes(s)).length / o.skills.length) * 100) }))
    .filter((r) => r.score > 0).sort((a, b) => b.score - a.score), [mine]);
  return (
    <Shell>
      <PageHead eyebrow="Skills Matching" title="See where your skills fit" desc="Select the skills you have. We'll rank opportunities by how well they match — no experience filter." />
      <div className="mx-auto max-w-6xl px-5 pt-10 grid lg:grid-cols-[1fr_1.4fr] gap-8">
        <div className="rounded-2xl border p-6 shadow-card h-fit">
          <h2 className="text-lg font-bold">Your skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {allSkills.map((s) => (
              <button key={s} onClick={() => toggle(s)} className={`chip text-sm py-1.5 px-3 cursor-pointer ${mine.includes(s) ? "bg-primary text-primary-foreground" : ""}`}>{s}</button>
            ))}
          </div>
          {mine.length > 0 && <button onClick={() => setMine([])} className="mt-4 text-sm font-semibold text-muted-foreground inline-flex items-center gap-1"><X className="size-4" /> Clear</button>}
        </div>
        <div className="grid gap-4 content-start">
          {mine.length === 0 && <p className="rounded-2xl bg-secondary p-8 text-center text-muted-foreground">Select at least one skill to see your matches.</p>}
          {mine.length > 0 && results.length === 0 && <p className="text-muted-foreground">No matches yet — try adding more skills.</p>}
          {results.map(({ o, score }) => (
            <div key={o.id} className="rounded-2xl border p-5 shadow-card">
              <div className="flex justify-between gap-3">
                <div><h3 className="font-bold text-lg">{o.title}</h3><p className="text-sm text-muted-foreground">{o.org} · {o.type} · {o.location}</p></div>
                <span className="flex items-center gap-1 font-bold text-ring shrink-0"><Sparkles className="size-4" />{score}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-primary" style={{ width: `${score}%` }} /></div>
              <div className="mt-3 flex flex-wrap gap-1">{o.skills.map((s) => <span key={s} className={`chip ${mine.includes(s) ? "bg-accent" : ""}`}>{s}</span>)}</div>
            </div>
          ))}
          {results.length > 0 && <Link to="/opportunities" className="btn btn-primary justify-self-start">View & apply</Link>}
        </div>
      </div>
    </Shell>
  );
}
