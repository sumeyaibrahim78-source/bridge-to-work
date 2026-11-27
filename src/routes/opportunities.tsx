import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Shell, PageHead } from "@/components/Shell";
import { opportunities, type OppType } from "@/lib/data";

export const Route = createFileRoute("/opportunities")({
  head: () => ({ meta: [
    { title: "Opportunities — TalentBridge" },
    { name: "description", content: "Internships, fellowships, returnships and skills-first entry roles." },
    { property: "og:title", content: "Opportunities — TalentBridge" },
    { property: "og:description", content: "Internships, fellowships, returnships and skills-first entry roles." },
  ] }),
  component: Page,
});

const types: ("All" | OppType)[] = ["All", "Internship", "Fellowship", "Returnship", "Entry role"];

function Page() {
  const [t, setT] = useState<(typeof types)[number]>("All");
  const [q, setQ] = useState("");
  const list = opportunities.filter((o) => (t === "All" || o.type === t) &&
    (o.title + o.org + o.skills.join(" ")).toLowerCase().includes(q.toLowerCase()));
  return (
    <Shell>
      <PageHead eyebrow="Opportunities" title="Gain real, paid local experience" desc="Every listing is matched on skills. No “3 years required” for your first role." />
      <div className="mx-auto max-w-6xl px-5 pt-10">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by skill, role or organization" className="flex-1 rounded-full border bg-card px-5 py-3 outline-none focus:ring-2 ring-ring" />
          <div className="flex flex-wrap gap-2">
            {types.map((x) => (
              <button key={x} onClick={() => setT(x)} className={`btn text-sm py-2 ${t === x ? "btn-primary" : "bg-card border"}`}>{x}</button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {list.map((o) => (
            <article key={o.id} className="rounded-2xl bg-card p-6 shadow-card flex flex-col">
              <div className="flex justify-between"><span className="chip">{o.type}</span><span className="text-sm text-muted-foreground">{o.duration} · {o.location}</span></div>
              <h3 className="mt-3 text-2xl font-semibold">{o.title}</h3>
              <p className="text-sm text-muted-foreground">{o.org}{o.paid ? " · Paid" : ""}</p>
              <p className="mt-3 text-sm flex-1">{o.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">{o.skills.map((s) => <span key={s} className="chip bg-muted">{s}</span>)}</div>
              <button onClick={() => toast.success(`Interest sent to ${o.org}`)} className="btn btn-primary mt-5 self-start">Express interest</button>
            </article>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">No matches — try another skill.</p>}
        </div>
      </div>
    </Shell>
  );
}
