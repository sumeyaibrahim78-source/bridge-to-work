import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Shell } from "@/components/Shell";
import { setUser } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [
    { title: "Log in – TalentBridge" },
    { name: "description", content: "Log in to your TalentBridge account." },
    { property: "og:title", content: "Log in – TalentBridge" },
    { property: "og:description", content: "Log in to your TalentBridge account." },
  ] }),
  component: Page,
});

function Page() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  return (
    <Shell>
      <div className="mx-auto max-w-md px-5 pt-16">
        <form onSubmit={(e) => { e.preventDefault(); const name = email.split("@")[0] ?? "there"; setUser({ name, email, role: "Job seeker" }); toast.success("Welcome back!"); nav({ to: "/opportunities" }); }}
          className="rounded-2xl border p-8 shadow-card grid gap-4">
          <h1 className="text-3xl font-bold text-primary">Welcome back</h1>
          <label className="grid gap-1 text-sm font-semibold">Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="field font-normal" /></label>
          <label className="grid gap-1 text-sm font-semibold">Password<input required type="password" minLength={6} className="field font-normal" /></label>
          <button className="btn btn-primary justify-center">Log in</button>
          <p className="text-sm text-center text-muted-foreground">New here? <Link to="/register" className="font-bold text-ring">Create an account</Link></p>
        </form>
      </div>
    </Shell>
  );
}
