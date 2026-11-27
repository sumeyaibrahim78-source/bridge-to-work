import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Shell, PageHead } from "@/components/Shell";
import { mentors } from "@/lib/data";

export const Route = createFileRoute("/mentors")({
  head: () => ({ meta: [
    { title: "Mentors — Bridgeway" },
    { name: "description", content: "Book free 1:1 career guidance with experienced professionals." },
    { property: "og:title", content: "Mentors — Bridgeway" },
    { property: "og:description", content: "Book free 1:1 career guidance with experienced professionals." },
  ] }),
  component: Page,
});

function Page() {
  return (
    <Shell>
      <PageHead eyebrow="Mentorship" title="Learn from people who've been there" desc="Free sessions on CVs, interviews, career changes and building your network." />
      <div className="mx-auto max-w-6xl px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mentors.map((m) => (
          <article key={m.name} className="rounded-2xl bg-card p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-xl">{m.initials}</div>
              <div><h3 className="text-lg font-semibold">{m.name}</h3><p className="text-sm text-muted-foreground">{m.role} · {m.org}</p></div>
            </div>
            <p className="mt-4 text-sm">{m.years} years of experience</p>
            <div className="mt-3 flex flex-wrap gap-2">{m.topics.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            <button onClick={() => toast.success(`Session request sent to ${m.name}`)} className="btn btn-primary mt-5 text-sm">Request a session</button>
          </article>
        ))}
      </div>
    </Shell>
  );
}
