import { useEffect, useState } from "react";
export type User = { name: string; email: string; role: string };
const KEY = "tb_user";
export function getUser(): User | null {
  try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch { return null; }
}
export function setUser(u: User | null) {
  if (u) localStorage.setItem(KEY, JSON.stringify(u)); else localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("tb-auth"));
}
export function useUser() {
  const [u, setU] = useState<User | null>(null);
  useEffect(() => { const f = () => setU(getUser()); f(); window.addEventListener("tb-auth", f); return () => window.removeEventListener("tb-auth", f); }, []);
  return u;
}
