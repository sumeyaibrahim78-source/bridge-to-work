import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Shell, PageHead } from "@/components/Shell";

export const Route = createFileRoute("/partners")({
  head: () => ({ meta: [
    { title: "Partner with us — Firststep" },
    { name: "description", content: "Employers, universities and communities building skills-first pathways to work." },
    { property: "og:title", content: "Partner with us — Firststep" },
    { property: "og:description", content: "Employers, universities and communities building skills-first pathways to work." },
  ] }),
  component: Page,
});

const kinds = [
  { t: "Employers", d: "Post skills-first roles, host fellows and returners, and meet pre-trained talent." },
  { t: "Educational institutions", d: "Connect students to placements and co-design courses with industry." },
  { t: "Community organizations", d: "Reach underserved job seekers and run local programs together." },
];

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <Shell>
      <PageHead eyebrow="Partners" title="Hire for potential. Build the pipeline together." desc="Join a network of businesses, universities and communities reducing unemployment." />
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-5">
        {kinds.map((k) => <div key={k.t} className="rounded-2xl bg-card p-6 shadow-card"><h3 className="text-xl font-semibold">{k.t}</h3><p className="mt-2 text-sm text-muted-foreground">{k.d}</p></div>)}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); toast.success("Thanks! Our partnerships team will reach out."); }}
        className="mx-auto max-w-2xl mt-14 mx-5 md:mx-auto rounded-2xl bg-card p-8 shadow-card grid gap-4">
        <h2 className="text-2xl font-semibold">Become a partner</h2>
        <input required placeholder="Organization name" className="rounded-xl border bg-background px-4 py-3" />
        <input required type="email" placeholder="Work email" className="rounded-xl border bg-background px-4 py-3" />
        <select className="rounded-xl border bg-background px-4 py-3"><option>Employer</option><option>Educational institution</option><option>Community organization</option></select>
        <textarea placeholder="How would you like to collaborate?" rows={4} className="rounded-xl border bg-background px-4 py-3" />
        <button disabled={sent} className="btn btn-primary justify-center">{sent ? "Request sent" : "Send request"}</button>
      </form>
    </Shell>
  );
}
