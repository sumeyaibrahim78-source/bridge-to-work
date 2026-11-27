import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { Shell, PageHead } from "@/components/Shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us – TalentBridge" },
    { name: "description", content: "Get in touch with the TalentBridge team." },
    { property: "og:title", content: "Contact Us – TalentBridge" },
    { property: "og:description", content: "Get in touch with the TalentBridge team." },
  ] }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <Shell>
      <PageHead eyebrow="Contact Us" title="We'd love to hear from you" desc="Questions, partnership ideas or feedback — our team replies within two working days." />
      <div className="mx-auto max-w-6xl px-5 pt-10 grid md:grid-cols-[1fr_1.5fr] gap-8">
        <div className="grid gap-4 content-start">
          {[[Mail, "Email", "hello@talentbridge.org"], [Phone, "Phone", "+20 2 1234 5678"], [MapPin, "Office", "Innovation Hub, Cairo"]].map(([I, t, v]) => {
            const Icon = I as typeof Mail;
            return <div key={t as string} className="flex gap-4 items-center rounded-2xl border p-5 shadow-card"><span className="icon-tile"><Icon className="size-5" /></span><div><p className="text-sm text-muted-foreground">{t as string}</p><p className="font-bold">{v as string}</p></div></div>;
          })}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); toast.success("Message sent — thank you!"); (e.target as HTMLFormElement).reset(); }}
          className="rounded-2xl border p-8 shadow-card grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="field" />
            <input required type="email" placeholder="Email" className="field" />
          </div>
          <select className="field"><option>I'm a job seeker</option><option>I'm a mentor</option><option>I'm an employer</option><option>University / NGO</option></select>
          <textarea required rows={5} placeholder="Your message" className="field" />
          <button className="btn btn-primary justify-center">{sent ? "Send another" : "Send message"}</button>
        </form>
      </div>
    </Shell>
  );
}
