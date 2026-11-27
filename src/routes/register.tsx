import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { GraduationCap, Users, Building2 } from "lucide-react";
import { Shell } from "@/components/Shell";
import { setUser } from "@/lib/auth";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [
    { title: "Register – TalentBridge" },
    { name: "description", content: "Join TalentBridge as a job seeker, mentor or employer." },
    { property: "og:title", content: "Register – TalentBridge" },
    { property: "og:description", content: "Join TalentBridge as a job seeker, mentor or employer." },
  ] }),
  component: Page,
});

const roles = [
  { r: "Job seeker", icon: GraduationCap },
  { r: "Mentor", icon: Users },
  { r: "Employer", icon: Building2 },
];

function Page() {
  const nav = useNavigate();
  const [role, setRole] = useState("Job seeker");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Shell>
      <div className="mx-auto max-w-lg px-5 pt-16">
        <form onSubmit={(e) => { e.preventDefault(); setUser({ name, email, role }); toast.success(`Welcome to TalentBridge, ${name.split(" ")[0]}!`); nav({ to: role === "Job seeker" ? "/skills-matching" : "/" }); }}
          className="rounded-2xl border p-8 shadow-card grid gap-4">
          <h1 className="text-3xl font-bold text-primary">Create your account</h1>
          <p className="text-sm font-semibold">I am joining as a…</p>
          <div className="grid grid-cols-3 gap-2">
            {roles.map(({ r, icon: I }) => (
              <button type="button" key={r} onClick={() => setRole(r)} className={`rounded-xl border p-3 grid place-items-center gap-1 text-sm font-semibold ${role === r ? "border-primary bg-secondary text-primary" : "text-muted-foreground"}`}><I className="size-5" />{r}</button>
            ))}
          </div>
          <label className="grid gap-1 text-sm font-semibold">Full name<input required value={name} onChange={(e) => setName(e.target.value)} className="field font-normal" /></label>
          <label className="grid gap-1 text-sm font-semibold">Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="field font-normal" /></label>
          <label className="grid gap-1 text-sm font-semibold">Password<input required type="password" minLength={6} className="field font-normal" /></label>
          <button className="btn btn-primary justify-center">Register</button>
          <p className="text-sm text-center text-muted-foreground">Already have an account? <Link to="/login" className="font-bold text-ring">Log in</Link></p>
        </form>
      </div>
    </Shell>
  );
}
