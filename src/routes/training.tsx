import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Shell, PageHead } from "@/components/Shell";
import { trainings } from "@/lib/data";

export const Route = createFileRoute("/training")({
  head: () => ({ meta: [
    { title: "Training & career guidance — Firststep" },
    { name: "description", content: "Free practical courses that make you job-ready." },
    { property: "og:title", content: "Training & career guidance — Firststep" },
    { property: "og:description", content: "Free practical courses that make you job-ready." },
  ] }),
  component: Page,
});

function Page() {
  return (
    <Shell>
      <PageHead eyebrow="Training" title="Practical skills, free for everyone" desc="Short courses co-designed with employers and universities. Finish one to earn a skills badge employers can see." />
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-5">
        {trainings.map((c) => (
          <article key={c.title} className="rounded-2xl bg-card p-6 shadow-card flex justify-between gap-4 items-start">
            <div><h3 className="text-xl font-semibold">{c.title}</h3><p className="mt-2 text-sm text-muted-foreground">{c.desc}</p><span className="chip mt-3">{c.hours} hours</span></div>
            <button onClick={() => toast.success(`Enrolled in ${c.title}`)} className="btn btn-accent text-sm shrink-0">Enroll</button>
          </article>
        ))}
      </div>
    </Shell>
  );
}
